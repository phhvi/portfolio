import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Music } from "@/components/Music";
import { Road } from "@/components/Road";
import { Words } from "@/components/Words";
import { experience, links, now, projects } from "@/data/content";

const tones = {
  pink: "bg-pink/60",
  paper: "bg-white/70 ring-1 ring-ink/10",
} as const;

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      data-stop
      className="mx-auto w-full max-w-5xl px-6 py-24 md:py-36"
    >
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-muted">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl">{title}</h2>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-ink/5 bg-paper/70 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 text-sm">
          <a href="#top" className="font-serif text-lg italic">
            vi.
          </a>
          <ul className="hidden gap-5 text-muted sm:flex">
            {["work", "experience", "off-screen", "music", "contact"].map(
              (s) => (
                <li key={s}>
                  <a className="hover:text-burgundy" href={`#${s}`}>
                    {s}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>
      </header>

      <main id="top" className="flex-1">
        <Road>
          <section
            id="hero"
            data-stop
            className="mx-auto grid w-full max-w-5xl items-center gap-12 px-6 pt-20 pb-16 md:grid-cols-[1.1fr_0.9fr] md:pt-28"
          >
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Software engineer · she/her
              </p>
              <h1 className="mt-4 text-5xl leading-[1.05] md:text-6xl">
                <Words text="Hi, I'm Vi." />
                <br />
                <Words
                  className="italic text-burgundy"
                  text="I build things for the web"
                />
                <Words text="- where clean code meets human-centered design." />
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                From Da Nang, now in Ho Chi Minh City. I studied human languages
                before moving into code, and spent the last three years shipping
                web apps. I like owning the problem end-to-end - bridging
                product thinking, backend logic, and frontend craft to build
                things that work effortlessly.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <a
                  href="#work"
                  className="rounded-full bg-ink px-5 py-2.5 text-paper transition hover:bg-burgundy"
                >
                  See my work
                </a>
                <a
                  href={links.cv}
                  className="rounded-full border border-ink/20 px-5 py-2.5 transition hover:border-burgundy hover:text-burgundy"
                >
                  Download CV
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="relative mx-auto w-56 md:w-72">
              <Image
                src="/images/vi-bike.png"
                alt="Vi Phan on her bike, flashing a peace sign"
                width={807}
                height={1600}
                priority
                className="relative drop-shadow-xl"
              />
            </Reveal>
          </section>

          <section className="mx-auto w-full max-w-5xl px-6 pb-10">
            <Reveal className="rounded-3xl bg-white/70 ring-1 ring-ink/10 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Now
              </p>
              <ul className="mt-4 grid gap-2 md:grid-cols-2">
                {now.map((n) => (
                  <li key={n} className="flex gap-3 leading-relaxed">
                    <span className="text-burgundy">—</span>
                    {n}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          <Section id="work" eyebrow="Work" title="Things I'm making">
            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={i * 0.1}
                  className={`flex h-full flex-col rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${tones[p.tone]}`}
                >
                  <p className="text-xs uppercase tracking-widest text-muted">
                    {p.kind}
                  </p>
                  <h3 className="mt-2 text-2xl">{p.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink/80">
                    {p.blurb}
                  </p>
                  <p className="mt-4 text-sm text-muted">
                    {p.stack.join(" · ")}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="rounded-full bg-paper/80 px-3 py-1">
                      {p.status}
                    </span>
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-burgundy underline-offset-4 hover:underline"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </Section>

          <Section
            id="experience"
            eyebrow="Experience"
            title="Where I've worked"
          >
            <ol className="relative border-l border-ink/15 pl-8">
              {experience.map((e, i) => (
                <Reveal
                  key={e.org + e.role}
                  delay={i * 0.05}
                  className="relative pb-10 last:pb-0"
                >
                  <span className="absolute -left-[2.35rem] top-1.5 size-3 rounded-full bg-burgundy ring-4 ring-paper" />
                  <p className="text-sm text-muted">{e.when}</p>
                  <h3 className="text-xl">
                    {e.role} <span className="text-muted">· {e.org}</span>
                  </h3>
                  <p className="mt-1 text-ink/80">{e.note}</p>
                </Reveal>
              ))}
            </ol>
          </Section>

          <Section
            id="off-screen"
            eyebrow="Off-screen"
            title="When the laptop is closed"
          >
            <Reveal>
              <p className="max-w-2xl text-lg leading-relaxed text-ink/80">
                I cycle — by the beach, up the mountain, and one day an Ironman
                with my best friend before I turn 35. I listen to dream pop and
                pop-punk, and I&apos;m slowly learning the drums. I journal, I
                declutter, I cook, I watch a lot of films, and I spend more time
                than I should in cafés watching people go by. Da Nang is home;
                the plan is more languages and more places.
              </p>
            </Reveal>
          </Section>

          <Section id="music" eyebrow="Music" title="A huge part of my life">
            <Reveal>
              <Music />
            </Reveal>
          </Section>

          <Section id="contact" eyebrow="Contact" title="Say hi">
            <Reveal className="rounded-3xl bg-ink p-8 text-paper md:p-12">
              <p className="max-w-xl text-lg leading-relaxed text-paper/80">
                Open to frontend and full-stack roles in Ho Chi Minh City or
                remote. Also open to coffee, bike routes and playlist swaps.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <a
                  href={`mailto:${links.email}`}
                  className="rounded-full bg-pink px-5 py-2.5 text-ink transition hover:bg-paper"
                >
                  {links.email}
                </a>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-paper/30 px-5 py-2.5 hover:border-pink hover:text-pink"
                >
                  GitHub
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-paper/30 px-5 py-2.5 hover:border-pink hover:text-pink"
                >
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </Section>
        </Road>
      </main>

      <footer className="mx-auto w-full max-w-5xl px-6 py-10 text-sm text-muted">
        <p>
          &ldquo;Be so good they can&apos;t ignore you.&rdquo; — built with
          Next.js, Tailwind and too much dream pop.
        </p>
      </footer>
    </>
  );
}
