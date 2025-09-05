export default function TrustBar() {
    return (
      <section aria-label="Compliance & trust" className="container mt-6">
        <div className="card px-4 py-3 grid grid-cols-1 gap-2 text-xs sm:grid-cols-3 sm:text-sm text-black/70">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
            GDPR-ready • Cookieless analytics
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
            Official WhatsApp Cloud API compatible
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
            Built for SMBs in hospitality, retail & services
          </div>
        </div>
      </section>
    );
  }
  