import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

// Configure this URL in Resend Inbound to receive parsed email events
export async function POST(req: Request) {
  try {
    const event = await req.json().catch(() => null)
    if (!event) return new NextResponse('Bad Request', { status: 400 })
    // For now, just acknowledge receipt
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return new NextResponse(e?.message || 'Unexpected error', { status: 500 })
  }
}


