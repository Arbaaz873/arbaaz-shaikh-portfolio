import { profile } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-10 lg:px-16 py-20">
      <div className="max-w-2xl">
        <p className="font-mono text-xs text-resolved mb-4">contact</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink leading-tight text-balance">
          Hiring for a Vulnerability Management or Cloud Security role?
        </h2>
        <p className="text-ink/75 mt-5 leading-relaxed">
          I'm targeting senior and lead-level vulnerability management and cloud security
          positions. Happy to walk through remediation program design, audit readiness, or how
          I'd approach your current backlog.
        </p>

        <div className="mt-9 grid sm:grid-cols-2 gap-4 max-w-xl">
          <a
            href={`mailto:${profile.email}`}
            className="border border-hairline px-5 py-4 hover:border-resolved transition-colors group"
          >
            <p className="font-mono text-[11px] text-muted group-hover:text-resolved">email</p>
            <p className="text-sm text-ink mt-1 break-all">{profile.email}</p>
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="border border-hairline px-5 py-4 hover:border-resolved transition-colors group"
          >
            <p className="font-mono text-[11px] text-muted group-hover:text-resolved">phone</p>
            <p className="text-sm text-ink mt-1">{profile.phone}</p>
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-hairline px-5 py-4 hover:border-resolved transition-colors group"
          >
            <p className="font-mono text-[11px] text-muted group-hover:text-resolved">linkedin</p>
            <p className="text-sm text-ink mt-1">{profile.linkedin}</p>
          </a>
          <div className="border border-hairline px-5 py-4">
            <p className="font-mono text-[11px] text-muted">location</p>
            <p className="text-sm text-ink mt-1">{profile.location}</p>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-hairline flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs text-faint">© {new Date().getFullYear()} Arbaaz Shaikh</p>
        <p className="font-mono text-xs text-faint">Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </section>
  );
}
