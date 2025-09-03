import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, business, website, whatsapp, useCase } = data || {};

    if (!email || !name) {
      return new NextResponse("Name and email are required", { status: 400 });
    }

    const ip =
      (req.headers.get("x-forwarded-for") || "").split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const record = {
      name,
      email: String(email).toLowerCase().trim(),
      business: business || "",
      website: website || "",
      whatsapp: whatsapp || "",
      use_case: useCase || "",
      ip,
      user_agent: req.headers.get("user-agent") || ""
    };

    const supabase = getSupabaseClient();

    // Insert and ignore duplicates by email (no UPDATE path, works with RLS insert-only policy)
    const { data: result, error } = await supabase
      .from('waitlist')
      .insert([record], { onConflict: 'email', ignoreDuplicates: true });

    if (error) {
      // Treat duplicate email (unique_violation) as success
      // Postgres error code 23505 => unique_violation
      // Supabase error object usually contains `code`
      const code = (error as any)?.code || (error as any)?.details;
      if (code === '23505' || String(error?.message || '').toLowerCase().includes('duplicate')) {
        return NextResponse.json({ ok: true, duplicate: true });
      }
      console.error('Supabase error:', error);
      const message = (error as any)?.message || "Failed to save to database";
      // If table is missing, surface a clear message in development
      if (process.env.NODE_ENV !== 'production') {
        return NextResponse.json({ ok: false, message }, { status: 500 });
      }
      return new NextResponse("Failed to save to database", { status: 500 });
    }

    return NextResponse.json({ ok: true, data: result ?? null });
  } catch (e: any) {
    console.error('API error:', e);
    return new NextResponse(e?.message || "Unexpected error", { status: 500 });
  }
}
