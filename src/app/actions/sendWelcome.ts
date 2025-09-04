"use server";

import { sendTransactional } from '@/lib/mailer'
import { welcomeTemplate } from '@/lib/email/templates/welcome'

export async function sendWelcome(to: string, name?: string) {
  const tpl = welcomeTemplate(name || '')
  await sendTransactional({ to, subject: tpl.subject, html: tpl.html, text: tpl.text })
}


