import { Resend } from 'resend'

let cachedClient: Resend | null = null

export function getEmailClient(): Resend {
  if (cachedClient) return cachedClient

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not set')
  }
  cachedClient = new Resend(apiKey)
  return cachedClient
}

export async function sendEmail(params: {
  from: string
  to: string | string[]
  subject: string
  html?: string
  text?: string
  replyTo?: string
}): Promise<{ id?: string }> {
  const resend = getEmailClient()
  const { data, error } = await resend.emails.send({
    from: params.from,
    to: Array.isArray(params.to) ? params.to : [params.to],
    subject: params.subject,
    html: params.html,
    text: params.text,
    reply_to: params.replyTo
  })
  if (error) throw error
  return { id: data?.id }
}


