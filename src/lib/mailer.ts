import nodemailer, { Transporter } from 'nodemailer'
import { z } from 'zod'

const envSchema = z.object({
  ZOHO_SMTP_HOST: z.string().default('smtp.zoho.com'),
  ZOHO_SMTP_PORT: z.coerce.number().default(465),
  ZOHO_NOREPLY_USER: z.string(),
  ZOHO_NOREPLY_PASS: z.string(),
  ZOHO_HELLO_USER: z.string(),
  ZOHO_HELLO_PASS: z.string(),
})

function getEnv() {
  const parsed = envSchema.safeParse(process.env)
  if (!parsed.success) {
    throw new Error('Missing or invalid SMTP environment variables')
  }
  return parsed.data
}

let noreplyTransport: Transporter | null = null
let helloTransport: Transporter | null = null

function createTransport(user: string, pass: string): Transporter {
  const env = getEnv()
  return nodemailer.createTransport({
    host: env.ZOHO_SMTP_HOST,
    port: env.ZOHO_SMTP_PORT,
    secure: true,
    auth: { user, pass }
  })
}

export function getNoreplyTransport(): Transporter {
  if (!noreplyTransport) {
    const env = getEnv()
    noreplyTransport = createTransport(env.ZOHO_NOREPLY_USER, env.ZOHO_NOREPLY_PASS)
  }
  return noreplyTransport!
}

export function getHelloTransport(): Transporter {
  if (!helloTransport) {
    const env = getEnv()
    helloTransport = createTransport(env.ZOHO_HELLO_USER, env.ZOHO_HELLO_PASS)
  }
  return helloTransport!
}

const mailSchema = z.object({
  to: z.union([z.string().email(), z.array(z.string().email()).nonempty()]),
  subject: z.string().min(1),
  html: z.string().min(1),
  text: z.string().optional(),
  replyTo: z.string().email().optional(),
})

export async function sendTransactional(input: z.infer<typeof mailSchema>) {
  const env = getEnv()
  const data = mailSchema.parse(input)
  const transporter = getNoreplyTransport()
  const info = await transporter.sendMail({
    from: `ChatReply <${env.ZOHO_NOREPLY_USER}>`,
    to: data.to,
    subject: data.subject,
    html: data.html,
    text: data.text,
    replyTo: data.replyTo,
    headers: { 'X-Entity-Ref-ID': crypto.randomUUID() }
  })
  return { id: info.messageId }
}

export async function sendSupport(input: z.infer<typeof mailSchema>) {
  const env = getEnv()
  const data = mailSchema.parse(input)
  const transporter = getHelloTransport()
  const info = await transporter.sendMail({
    from: `Customer Support <${env.ZOHO_HELLO_USER}>`,
    to: data.to,
    subject: data.subject,
    html: data.html,
    text: data.text,
    replyTo: data.replyTo,
    headers: { 'X-Entity-Ref-ID': crypto.randomUUID() }
  })
  return { id: info.messageId }
}

export async function verifyTransports() {
  await getNoreplyTransport().verify()
  await getHelloTransport().verify()
}
