import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://chatreply.online"),
  title: "ChatReply — WhatsApp AI Chatbot for SMBs",
  description:
    "ChatReply automates WhatsApp replies for small businesses: instant FAQs, lead capture, and simple analytics. Affordable, fast, and easy to set up.",
  openGraph: {
    title: "ChatReply — WhatsApp AI Chatbot for SMBs",
    description:
      "Automate WhatsApp replies, capture leads, and get simple analytics. Start lean, validate, and scale.",
    url: "https://chatreply.online",
    siteName: "ChatReply",
    images: [{ url: "/ChatReplyLogo.png", width: 1200, height: 630, alt: "ChatReply" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatReply — WhatsApp AI for SMBs",
    description: "Instant replies, lead capture, simple analytics.",
    images: ["/ChatReplyLogo.png"]
  },
  icons: { 
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-black/80 antialiased">
        <Header />
        <main className="pt-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
