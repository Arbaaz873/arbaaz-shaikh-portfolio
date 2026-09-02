import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="px-6 sm:px-10 lg:px-16 py-16 border-b border-hairline">
      <div className="flex items-baseline justify-between mb-10">
        <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink">Experience</h2>
        <p className="font-mono text-xs text-faint hidden sm:block">8+ years enterprise IT</p>
      </div>

      <div className="space-y-0">
        {experience.map((job, i) => (
          <div
            key={job.company}
            className="grid sm:grid-cols-[220px_1fr] gap-4 sm:gap-10 py-8 border-t border-hairline first:border-t-0"
          >
            <div>
              <p className="font-medium text-ink">{job.role}</p>
              <p className="text-sm text-muted mt-1">{job.company}</p>
              <p className="font-mono text-xs text-faint mt-2">{job.period}</p>
              <p className="font-mono text-xs text-faint">{job.location}</p>
            </div>
            <ul className="space-y-2.5">
              {job.bullets.map((b, j) => (
                <li key={j} className="text-sm text-ink/85 leading-relaxed pl-4 relative">
                  <span className="absolute left-0 top-[0.6em] h-1 w-1 bg-faint" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
