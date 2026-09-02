import { capabilities } from "@/data/resume";

export default function Capabilities() {
  return (
    <section id="capabilities" className="px-6 sm:px-10 lg:px-16 py-16 border-b border-hairline">
      <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink mb-10">
        Capabilities
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
        {capabilities.map((c) => (
          <div key={c.group} className="bg-base p-6">
            <p className="font-mono text-xs text-resolved mb-4">{c.group}</p>
            <ul className="space-y-2">
              {c.items.map((item) => (
                <li key={item} className="text-sm text-ink/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
