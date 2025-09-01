import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5">
      <div className="container py-10 grid gap-6 md:grid-cols-4">
        <div>
          <h4 className="font-semibold mb-2">ChatReply</h4>
          <p className="text-sm text-black/60">
            WhatsApp AI assistant for small businesses. Instant replies, lead capture, simple analytics.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>GDPR-ready</li>
            <li>Cookieless analytics</li>
            <li>WhatsApp Cloud API compatible</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Get updates</h4>
          <p className="text-sm text-black/60">Join the waitlist to get early access and launch perks.</p>
          <Link href="#waitlist" className="inline-block mt-3 text-sm font-medium text-brand-700 hover:underline">Join now →</Link>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="container py-6 text-xs text-black/60">
          © {new Date().getFullYear()} ChatReply. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
