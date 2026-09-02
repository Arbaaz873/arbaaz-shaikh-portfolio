import { profile, scanSummary } from "@/data/resume";

export default function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden border-b border-hairline">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative px-6 sm:px-10 lg:px-16 pt-16 pb-14 lg:pt-24 lg:pb-20">
        <div className="max-w-4xl">
<img src="/profile.jpg" alt="Arbaaz Shaikh" className="w-36 h-36 rounded-full object-cover border border-hairline mb-6" />
          <div className="flex items-center gap-2 font-mono text-xs text-muted mb-8">
            <span className="text-resolved">scan_status:</span>
            <span>complete</span>
            <span className="text-faint">/</span>
            <span className="text-resolved">findings:</span>
            <span>0 open critical</span>
          </div>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-ink text-balance">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted font-medium">
            {profile.role} · Pune, India
          </p>

          <p className="mt-7 text-base sm:text-lg text-ink/90 max-w-2xl leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#engagements"
              className="bg-resolved text-base font-semibold text-sm px-5 py-3 hover:bg-resolved/90 transition-colors"
            >
              View engagements
            </a>
            <a
              href="#contact"
              className="border border-hairline text-ink text-sm font-medium px-5 py-3 hover:border-muted transition-colors"
            >
              Get in touch
            </a>
            <span className="font-mono text-xs text-faint ml-1">
              {profile.status}
            </span>
          </div>
        </div>

        {/* scan summary strip */}
        <div className="mt-16 border border-hairline bg-surface/70">
          <div className="flex items-center justify-between border-b border-hairline px-5 py-2.5">
            <span className="font-mono text-[11px] text-muted">
              scan_report.json — impact_summary
            </span>
            <span className="font-mono text-[11px] text-faint hidden sm:inline">
              last_verified: current role
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-hairline">
            {scanSummary.map((s) => (
              <div key={s.label} className="px-5 py-5">
                <p className="font-display font-semibold text-2xl sm:text-3xl text-ink">
                  {s.value}
                </p>
                <p className="text-xs text-muted mt-1.5 leading-snug">{s.label}</p>
                <p className="font-mono text-[10px] text-faint mt-1">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
