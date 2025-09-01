"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/waitlist", label: "Early Access" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" }
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="container flex h-16 items-center justify-between">
        <Link className="flex items-center gap-2" href="/">
          <Image src="/ChatReplyLogo.png" alt="ChatReply" width={32} height={32} className="rounded-md" />
          <span className="font-semibold tracking-tight">ChatReply</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`hover:text-black ${pathname === n.href ? "text-black font-semibold" : "text-black/70"}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/waitlist"
            className="inline-flex items-center rounded-xl bg-brand-600 px-4 py-2 text-white hover:bg-brand-700 focus-ring"
          >
            Join Early Access
          </Link>
        </div>
      </div>
    </header>
  );
}
