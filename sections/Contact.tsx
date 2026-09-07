import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <Reveal as="h2" className="serif mt-6 text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.05]">
            Interested in building something meaningful?
          </Reveal>
          <p className="mt-6 max-w-xl text-[15px] leading-8 text-muted">
            Open to software engineering, backend, and applied AI conversations — internships, full-time roles, and
            collaborations where data quality and clear systems matter.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="border border-fg bg-fg px-5 py-3 font-mono text-[11px] tracking-[0.16em] text-bg uppercase"
            >
              Start a conversation
            </a>
            <a
              href={profile.resumePath}
              download
              className="border border-line px-5 py-3 font-mono text-[11px] tracking-[0.16em] uppercase"
            >
              Download resume
            </a>
          </div>
          <ul className="mt-10 space-y-3 font-mono text-xs tracking-[0.08em] text-muted">
            <li>
              <a className="hover:text-fg" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
            <li>
              <a
                className="hover:text-fg"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a className="hover:text-fg" href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}>
                {profile.phone}
              </a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
