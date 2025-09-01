# ChatReply - WhatsApp AI Assistant

This is a [Next.js](https://nextjs.org) project for ChatReply, a WhatsApp AI assistant that automates replies and captures leads.

## Environment Setup

Before running the project, you need to set up environment variables. Create a `.env.local` file in the root directory with the following variables:

```bash
# Supabase (required for waitlist functionality)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Vercel Blob Storage (optional - for file uploads)
# BLOB_READ_WRITE_TOKEN=your_vercel_blob_token_here
```

### Setting up Supabase

1. Go to [Supabase](https://supabase.com) and create a new project
2. Get your project URL and anon key from Settings → API
3. Create a `waitlist` table in your database with the following schema:

```sql
CREATE TABLE waitlist (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  business TEXT,
  website TEXT,
  whatsapp TEXT,
  use_case TEXT,
  ip TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

4. Add the environment variables to your `.env.local` file

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
# or
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Supabase Integration

This project is designed to work with Supabase for database and authentication. To set up Supabase:

1. Create a new project at [Supabase](https://supabase.com)
2. Get your project URL and anon key
3. Add the environment variables to your `.env.local` file
4. Set up your database schema as needed

### Vercel Deployment

This project is optimized for Vercel deployment:

1. **Connect to Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js

2. **Environment Variables:**
   - Add your Supabase environment variables in Vercel dashboard
   - Go to Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`

3. **Deploy:**
   - Vercel will automatically deploy on every push to master
   - Your site will be available at `https://your-project.vercel.app`

## Features

- ✅ WhatsApp AI assistant automation
- ✅ Lead capture and waitlist management
- ✅ Vercel Blob storage integration
- ✅ Responsive design with Tailwind CSS
- ✅ TypeScript support
- ✅ Ready for Supabase integration
