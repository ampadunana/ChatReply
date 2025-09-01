import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

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
      user_agent: req.headers.get("user-agent") || "",
      created_at: new Date().toISOString()
    };

    // Insert into Supabase waitlist table
    const { data: result, error } = await supabase
      .from('waitlist')
      .insert([record])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return new NextResponse("Failed to save to database", { status: 500 });
    }

    return NextResponse.json({ ok: true, data: result });
  } catch (e: any) {
    console.error('API error:', e);
    return new NextResponse(e?.message || "Unexpected error", { status: 500 });
  }
}
