import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const { name, email, message } = body || {}

    if (!name || !email || !message) {
      return new NextResponse('Name, email, and message are required', { status: 400 })
    }

    const toAddress = process.env.RESEND_TO_SUPPORT_EMAIL || process.env.CONTACT_TO_EMAIL || 'hello@chatreply.online'
    const fromAddress = process.env.RESEND_FROM_SUPPORT_EMAIL || 'ChatReply Support <hello@chatreply.online>'

    // Notify internal team
    await sendEmail({
      from: fromAddress,
      to: toAddress,
      subject: `New contact message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
      replyTo: email
    })

    // Auto-acknowledge sender (from Support identity)
    await sendEmail({
      from: fromAddress,
      to: email,
      subject: 'We received your message',
      html: `<p>Hi ${name},</p><p>Thanks for contacting ChatReply. Our team will get back to you shortly.</p>`
    })

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    console.error('Contact API error', e)
    return new NextResponse(e?.message || 'Unexpected error', { status: 500 })
  }
}


