import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://chatreply.online"),
  title: "ChatReply — 24/7 AI Customer Service on WhatsApp",
  description:
    "Enterprise grade AI customer service for WhatsApp. 24/7 responses, lead capture, analytics. Plans from $39/mo (Starter), $79/mo (Pro), $199/mo (Enterprise).",
  openGraph: {
    title: "ChatReply — 24/7 AI Customer Service on WhatsApp",
    description:
      "Resolve questions instantly, capture leads automatically, and escalate to your team. Enterprise security and analytics.",
    url: "https://chatreply.online",
    siteName: "ChatReply",
    images: [{ url: "/ChatReplyLogo.png", width: 1200, height: 630, alt: "ChatReply" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatReply — 24/7 AI on WhatsApp",
    description: "AI customer service that never sleeps. Lead capture and analytics included.",
    images: ["/ChatReplyLogo.png"]
  },
  icons: {
    icon: [
      { url: "/app/icon.svg?v=3", type: "image/svg+xml" },
      { url: "/favicon.ico?v=3" }
    ],
    shortcut: ["/favicon.ico?v=3"],
    apple: ["/apple-icon.png?v=3"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/app/icon.svg?v=3" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico?v=3" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=3" />
      </head>
      <body className="min-h-screen text-black/80 antialiased">
        <Header />
        <main className="pt-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
