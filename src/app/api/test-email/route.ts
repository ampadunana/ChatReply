import { NextResponse } from 'next/server'
import { sendTransactional } from '@/lib/mailer'
import { welcomeTemplate } from '@/lib/email/templates/welcome'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const to = process.env.ZOHO_HELLO_USER
    if (!to) return new NextResponse('ZOHO_HELLO_USER not set', { status: 400 })
    const tpl = welcomeTemplate('Friend')
    await sendTransactional({ to, subject: tpl.subject, html: tpl.html, text: tpl.text })
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    console.error('test-email error', e)
    return new NextResponse(e?.message || 'Unexpected error', { status: 500 })
  }
}


