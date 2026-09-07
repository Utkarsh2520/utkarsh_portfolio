import { Reveal } from "@/components/Reveal";
import { highlights } from "@/data/certifications";

export function Metrics() {
  return (
    <section className="border-t border-line px-5 py-20 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.06} className="border-t border-line pt-6">
            <p className="serif text-5xl md:text-6xl">{item.value}</p>
            <p className="mt-3 font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
              {item.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
