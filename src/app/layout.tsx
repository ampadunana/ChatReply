import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import { DEFAULT_SEO, OG } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(DEFAULT_SEO.canonical),
  title: DEFAULT_SEO.title,
  description: DEFAULT_SEO.description,
  keywords: DEFAULT_SEO.keywords,
  alternates: { canonical: DEFAULT_SEO.canonical },
  openGraph: {
    title: OG.title,
    description: OG.description,
    url: DEFAULT_SEO.canonical,
    siteName: "ChatReply",
    images: OG.images,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: OG.title,
    description: OG.description,
    images: OG.images?.[0]?.url ? [OG.images[0].url] : [],
  },
  icons: { 
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-6.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" }
    ],
    apple: "/apple-icon.png"
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-black/80 antialiased">
        <Header />
        <TopBanner />
        <main className="pt-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
