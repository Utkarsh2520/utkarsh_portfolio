import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section className="border-t border-line px-5 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Certifications</SectionLabel>
        <Reveal as="h2" className="serif mt-6 text-[clamp(1.8rem,3.5vw,2.8rem)]">
          Credentials that map to the work.
        </Reveal>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {certifications.map((cert) => (
            <li
              key={`${cert.issuer}-${cert.name}`}
              className="grid gap-2 py-5 md:grid-cols-[1fr_200px_1fr] md:items-baseline"
            >
              <p className="serif text-xl">{cert.name}</p>
              <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                {cert.issuer}
              </p>
              <p className="text-sm text-muted md:text-right">{cert.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
