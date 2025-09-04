import { NextResponse } from 'next/server'
import { z } from 'zod'
import { sendSupport } from '@/lib/mailer'

export const runtime = 'nodejs'

const schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  message: z.string().min(1).max(5000)
})

// Simple in-memory rate limit per IP (dev only). For prod use Upstash Redis.
const buckets = new Map<string, { tokens: number; ts: number }>()
const RATE = { capacity: 5, refillMs: 60_000 }

function allow(ip: string) {
  const now = Date.now()
  const b = buckets.get(ip) || { tokens: RATE.capacity, ts: now }
  const elapsed = now - b.ts
  const refill = Math.floor(elapsed / RATE.refillMs)
  if (refill > 0) {
    b.tokens = Math.min(RATE.capacity, b.tokens + refill)
    b.ts = now
  }
  if (b.tokens <= 0) return false
  b.tokens -= 1
  buckets.set(ip, b)
  return true
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local'
    if (!allow(ip)) return new NextResponse('Too Many Requests', { status: 429 })

    const json = await req.json()
    const data = schema.parse(json)

    const to = process.env.ZOHO_HELLO_USER
    if (!to) return new NextResponse('ZOHO_HELLO_USER not set', { status: 400 })

    await sendSupport({
      to,
      subject: `New support message from ${data.name}`,
      html: `<p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p>${data.message}</p>`,
      text: `${data.name} <${data.email}>\n\n${data.message}`,
      replyTo: data.email
    })

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    const message = process.env.NODE_ENV === 'production' ? 'Email failed' : (e?.message || 'Unexpected error')
    return new NextResponse(message, { status: 500 })
  }
}


