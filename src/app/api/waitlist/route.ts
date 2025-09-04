import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { sendTransactional, sendSupport } from "@/lib/mailer";

export const dynamic = "force-dynamic";
export const runtime = 'nodejs';

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
      .insert([record]);

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

    // Fire-and-forget emails (do not block response)
    const notifyTo = process.env.ZOHO_HELLO_USER || 'hello@chatreply.online'
    try {
      await Promise.all([
        sendSupport({
          to: notifyTo,
          subject: `New waitlist signup: ${record.name}`,
          html: `<p><strong>Name:</strong> ${record.name}</p><p><strong>Email:</strong> ${record.email}</p><p><strong>Business:</strong> ${record.business}</p><p><strong>Use case:</strong> ${record.use_case}</p>`
        }),
        sendTransactional({
          to: record.email,
          subject: 'Welcome to ChatReply Early Access — Next steps',
          html: `<h1>Welcome, ${record.name}!</h1>
                 <p>You're confirmed for early access between <strong>Sept 12–15</strong>. Your first week is free.</p>
                 <p>In the coming days, we will email you a short setup form to complete before Sept 12. It will ask for:</p>
                 <ul>
                   <li>Business name and WhatsApp number</li>
                   <li>FAQ list (questions and answers)</li>
                   <li>Opening hours and delivery/returns info</li>
                   <li>Preferred brand voice (formal or friendly)</li>
                 </ul>
                 <p>After you submit the form, we’ll guide you to connect WhatsApp and go live.</p>
                 <p style="margin-top:12px;color:#374151;">Please do not reply to this email. For enquiries, contact <a href="mailto:hello@chatreply.online">hello@chatreply.online</a>, your message will be routed to our support team.</p>`,
          text: `Welcome, ${record.name}! Early access Sept 12–15 (first week free).
                We'll send a setup form to complete before Sept 12 asking for: business name & WhatsApp number; FAQs; hours & delivery/returns; brand voice. After submission, we'll help connect WhatsApp and go live.
                Do not reply to this email. For enquiries, contact hello@chatreply.online, your message will be routed to our support team.`,
          replyTo: process.env.ZOHO_HELLO_USER
        })
      ])
    } catch (emailErr) {
      console.warn('Waitlist email failed', emailErr)
    }

    return NextResponse.json({ ok: true, data: result ?? null });
  } catch (e: any) {
    console.error('API error:', e);
    return new NextResponse(e?.message || "Unexpected error", { status: 500 });
  }
}
