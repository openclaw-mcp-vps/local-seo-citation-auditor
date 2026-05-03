export default function Home() {
  const faqs = [
    {
      q: "Which directories does it check?",
      a: "We scan 50+ directories including Google Business Profile, Yelp, Yellow Pages, Bing Places, Apple Maps, Facebook, Foursquare, and dozens more local citation sources."
    },
    {
      q: "What are NAP inconsistencies and why do they matter?",
      a: "NAP stands for Name, Address, Phone. When these differ across directories, search engines lose trust in your business data, directly lowering your local search rankings."
    },
    {
      q: "Do I need technical skills to use this?",
      a: "No. Just enter your business name and location. We handle the scanning and give you a simple checklist with direct links to fix each listing."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Local SEO Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find Inconsistent Business Listings<br />
          <span className="text-[#58a6ff]">Hurting Your Local SEO</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Scan 50+ local directories for NAP inconsistencies. Get a prioritized cleanup checklist with direct links to fix every broken listing — fast.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Auditing — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Social proof strip */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl p-6">
          <div>
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-xs text-[#8b949e] mt-1">Directories Scanned</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">NAP</div>
            <div className="text-xs text-[#8b949e] mt-1">Inconsistency Detection</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">1-Click</div>
            <div className="text-xs text-[#8b949e] mt-1">Fix Links Included</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#30363d] rounded-2xl p-8 text-center bg-[#161b22]">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-3">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Scan 50+ local directories",
              "NAP inconsistency report",
              "Prioritized cleanup checklist",
              "Direct fix links per listing",
              "Monthly re-scan alerts",
              "Export report as PDF"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Local SEO Citation Auditor. All rights reserved.
      </footer>
    </main>
  );
}
