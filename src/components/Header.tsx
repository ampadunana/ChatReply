"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/waitlist#waitlist", label: "Early Access" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="container flex h-16 items-center justify-between">
        <Link className="flex items-center gap-2" href="/">
          <Image src="/ChatReplyLogo.png" alt="ChatReply" width={32} height={32} className="rounded-md" />
          <span className="font-semibold tracking-tight">ChatReply</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`hover:text-black ${pathname === n.href.replace(/#.*/, "") ? "text-black font-semibold" : "text-black/70"}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/waitlist#waitlist"
            className="inline-flex items-center rounded-xl bg-brand-600 px-4 py-2 text-white hover:bg-brand-700 focus-ring"
          >
            Join Early Access
          </Link>
          {/* Mobile menu toggle */}
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-black/70 hover:text-black focus-ring"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur">
          <div className="container py-3 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`py-2 ${pathname === n.href ? "text-black font-semibold" : "text-black/80"}`}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/waitlist#waitlist"
              className="mt-1 inline-flex items-center justify-center rounded-xl bg-brand-600 px-4 py-3 text-white hover:bg-brand-700 focus-ring"
              onClick={() => setOpen(false)}
            >
              Join Early Access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
