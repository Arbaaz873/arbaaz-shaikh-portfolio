import { engagements, Severity } from "@/data/resume";

const severityMap: Record<Severity, { label: string; color: string; dot: string }> = {
  critical: { label: "Critical", color: "text-critical", dot: "bg-critical" },
  high: { label: "High", color: "text-high", dot: "bg-high" },
  medium: { label: "Medium", color: "text-info", dot: "bg-info" },
  resolved: { label: "Resolved", color: "text-resolved", dot: "bg-resolved" },
};

export default function Engagements() {
  return (
    <section id="engagements" className="px-6 sm:px-10 lg:px-16 py-16 border-b border-hairline">
      <div className="mb-10">
        <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink">Engagements</h2>
        <p className="text-sm text-muted mt-2 max-w-xl">
          Selected work, framed the way I actually track it — as findings with a severity, an
          action taken, and a verified outcome.
        </p>
      </div>

      <div className="space-y-5">
        {engagements.map((e) => {
          const sev = severityMap[e.severity];
          return (
            <article
              key={e.id}
              className="border border-hairline bg-surface/50 hover:border-faint transition-colors"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-hairline px-5 py-3">
                <span className="font-mono text-xs text-faint">{e.id}</span>
                <span className={`flex items-center gap-1.5 font-mono text-xs ${sev.color}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${sev.dot}`} />
                  {sev.label}
                </span>
                <span className="font-mono text-xs text-faint ml-auto">{e.window}</span>
              </div>

              <div className="p-5 sm:p-7 grid lg:grid-cols-[1.1fr_1fr] gap-8">
                <div>
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-ink">
                    {e.title}
                  </h3>
                  <p className="text-sm text-ink/75 mt-3 leading-relaxed">{e.context}</p>

                  <p className="font-mono text-[11px] text-muted mt-5 mb-2">outcome</p>
                  <p className="text-sm text-ink/90 leading-relaxed border-l-2 border-resolved pl-3">
                    {e.outcome}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[11px] text-muted mb-2">actions taken</p>
                  <ul className="space-y-2">
                    {e.actions.map((a, i) => (
                      <li key={i} className="text-sm text-ink/85 leading-relaxed pl-4 relative">
                        <span className="absolute left-0 top-[0.6em] h-1 w-1 bg-faint" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {e.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] text-muted border border-hairline px-2 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
