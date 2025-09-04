import { describe, it, expect, vi, beforeEach } from 'vitest'
import * as nodemailer from 'nodemailer'

vi.mock('nodemailer', () => {
  const sendMail = vi.fn().mockResolvedValue({ messageId: 'id-123' })
  return {
    default: { createTransport: vi.fn(() => ({ sendMail })) },
    createTransport: vi.fn(() => ({ sendMail })),
  }
})

process.env.ZOHO_SMTP_HOST = 'smtp.zoho.com'
process.env.ZOHO_SMTP_PORT = '465'
process.env.ZOHO_NOREPLY_USER = 'noreply@chatreply.online'
process.env.ZOHO_NOREPLY_PASS = 'pass'
process.env.ZOHO_HELLO_USER = 'hello@chatreply.online'
process.env.ZOHO_HELLO_PASS = 'pass'

import { sendTransactional } from './mailer'

describe('mailer', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('sends transactional email via nodemailer', async () => {
    const res = await sendTransactional({
      to: 'user@example.com',
      subject: 'Hello',
      html: '<p>Hi</p>',
      text: 'Hi'
    })
    expect(res.id).toBeDefined()
    expect((nodemailer.createTransport as any).mock.calls[0][0].auth.user).toBe('noreply@chatreply.online')
  })
})


