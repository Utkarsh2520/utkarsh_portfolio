import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="serif text-xl">{profile.name}</p>
          <p className="mt-2 text-sm text-muted">{profile.title} · {profile.location}</p>
        </div>
        <nav className="flex flex-wrap gap-5 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
          {profile.nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-fg">
              {item.label}
            </a>
          ))}
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-fg">
            Email
          </a>
          <a href={profile.resumePath} download className="hover:text-fg">
            Resume
          </a>
        </nav>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-line pt-6 text-[11px] text-faint md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="font-mono tracking-[0.12em] uppercase">
          Built with Next.js / TypeScript / Motion
        </p>
      </div>
    </footer>
  );
}
