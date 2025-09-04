import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://chatreply.online"),
  title: "ChatReply — 24/7 AI Customer Service on WhatsApp",
  description:
    "Enterprise grade AI customer service for WhatsApp. 24/7 responses, lead capture, human escalation, and analytics. Plans from $39/mo (Starter), $79/mo (Pro), $199/mo (Enterprise).",
  openGraph: {
    title: "ChatReply — 24/7 AI Customer Service on WhatsApp",
    description:
      "Resolve questions instantly, capture leads automatically, escalate to your team when needed, and track performance. Enterprise security and analytics.",
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
  /*
   * Keep icons in metadata so all browsers get a reliable tag.
   * IMPORTANT: Use `/icon.svg` (no `/app/`) because Next exposes `src/app/icon.svg` at `/icon.svg`.
   */
  icons: {
    icon: [{ url: "/favicon.ico?v=5" }, { url: "/ChatReplyLogo.png?v=5" }],
    shortcut: ["/favicon.ico?v=5"],
    apple: ["/ChatReplyLogo.png?v=5"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* No manual <head> links; Next generates them from metadata + src/app/icon.svg */}
      <body className="min-h-screen text-black/80 antialiased">
        <Header />
        <main className="pt-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
