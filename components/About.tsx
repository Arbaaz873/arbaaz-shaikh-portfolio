import { profile, certifications, education } from "@/data/resume";

export default function About() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-16 border-b border-hairline">
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20">
        <div>
          <p className="font-mono text-xs text-resolved mb-4">about</p>
          <p className="text-lg sm:text-xl leading-relaxed text-ink/90 max-w-2xl text-balance">
            {profile.summary}
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <p className="font-mono text-xs text-muted mb-3">certifications</p>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-baseline justify-between gap-4 text-sm">
                  <span className="text-ink/90">{c.name}</span>
                  <span className="font-mono text-xs text-faint whitespace-nowrap">
                    {c.issuer} · {c.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs text-muted mb-3">education</p>
            <ul className="space-y-3">
              {education.map((e) => (
                <li key={e.school} className="text-sm">
                  <p className="text-ink/90">{e.degree}</p>
                  <p className="font-mono text-xs text-faint mt-0.5">
                    {e.school} · {e.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
