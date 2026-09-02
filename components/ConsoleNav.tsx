"use client";

import { useEffect, useState } from "react";

const modules = [
  { id: "overview", label: "Overview" },
  { id: "experience", label: "Experience" },
  { id: "engagements", label: "Engagements" },
  { id: "capabilities", label: "Capabilities" },
  { id: "contact", label: "Contact" },
];

export default function ConsoleNav() {
  const [active, setActive] = useState("overview");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = modules
      .map((m) => document.getElementById(m.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* mobile top bar */}
      <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between border-b border-hairline bg-base/95 backdrop-blur px-5 py-3">
        <span className="font-mono text-xs text-resolved">
          <span className="animate-blink">●</span> arbaaz@security:~$
        </span>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="font-mono text-xs text-muted border border-hairline px-3 py-1.5"
        >
          {open ? "close" : "menu"}
        </button>
      </div>
      {open && (
        <div className="lg:hidden sticky top-[45px] z-40 bg-surface border-b border-hairline px-5 py-3 space-y-2">
          {modules.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              onClick={() => setOpen(false)}
              className={`block font-mono text-sm py-1 ${
                active === m.id ? "text-resolved" : "text-muted"
              }`}
            >
              {m.label}
            </a>
          ))}
        </div>
      )}

      {/* desktop sidebar */}
      <nav className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-64 border-r border-hairline bg-surface/60 backdrop-blur-sm px-8 py-10 z-30">
        <div className="mb-14">
          <p className="font-mono text-[13px] text-resolved">
            <span className="animate-blink">●</span> session: active
          </p>
          <p className="font-display font-semibold text-lg text-ink mt-3 leading-tight">
            Arbaaz Shaikh
          </p>
          <p className="text-xs text-muted mt-1">Vulnerability Management</p>
        </div>

        <ul className="space-y-1">
          {modules.map((m, i) => (
            <li key={m.id}>
              <a
                href={`#${m.id}`}
                className="group flex items-center gap-3 py-2.5 text-sm transition-colors"
              >
                <span
                  className={`font-mono text-[11px] w-5 ${
                    active === m.id ? "text-resolved" : "text-faint"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`transition-colors ${
                    active === m.id
                      ? "text-ink font-medium"
                      : "text-muted group-hover:text-ink"
                  }`}
                >
                  {m.label}
                </span>
                {active === m.id && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-resolved" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-10 border-t border-hairline">
          <p className="font-mono text-[11px] text-faint leading-relaxed">
            Pune, IN
            <br />
            UTC+05:30
          </p>
        </div>
      </nav>
    </>
  );
}
