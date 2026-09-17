import { ArrowUpRight, Eyebrow } from "./chrome";
import { CountUp, Reveal } from "../lib/motion";
import { CONTACT, IMPACT_STATS, IMG } from "../data/content";

/* ---------------------------- impact goals ------------------------- */
export function ImpactGoals() {
  return (
    <section id="impact" className="scroll-mt-24 bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <Eyebrow>06 — Impact goals</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 max-w-xl font-display text-[clamp(2.6rem,5.5vw,4.8rem)] leading-[1.02] text-ink">
                A focused beginning. <em className="text-clay">A bigger ambition.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150} className="shrink-0">
            <span className="neu-pressed inline-flex items-center gap-3 border border-clay/30 bg-parchment/60 px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.26em] text-clay">
              <span className="size-2 bg-clay" aria-hidden />
              First 2–3 year targets
            </span>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <p className="mt-8 max-w-2xl border-l-[3px] border-gold pl-6 font-display text-xl leading-snug text-ink-soft md:text-2xl">
            “SEN's first 2–3 years will focus on practical, measurable support
            in selected communities before wider expansion.”
          </p>
        </Reveal>

        {/* ledger of targets */}
        <div className="mt-14 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {IMPACT_STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              dir="none"
              className="group relative bg-bone p-8 transition-all duration-300 hover:neu-raised-card hover:bg-parchment md:p-10"
            >
              <span className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-ink-soft/70">
                Target {`0${i + 1}`}
              </span>
              <p className="mt-5 font-display text-5xl leading-none text-pine transition-colors duration-500 group-hover:text-clay md:text-6xl">
                {stat.word ? (
                  <em>{stat.word}</em>
                ) : (
                  <>
                    <CountUp to={stat.low!} duration={1500} delay={i * 100} />
                    <span aria-hidden className="text-clay">–</span>
                    <CountUp to={stat.high!} duration={1900} delay={i * 100} />
                  </>
                )}
              </p>
              <p className="mt-4 text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink">
                {stat.label}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{stat.desc}</p>
            </Reveal>
          ))}

          <Reveal dir="none" delay={420} className="neu-dark-pressed flex flex-col justify-between border border-pine-deep bg-pine p-8 text-bone md:p-10">
            <p className="font-display text-2xl leading-snug md:text-[1.7rem]">
              Targets, not trophies — <em className="text-gold">promises we intend to keep, and report honestly.</em>
            </p>
            <a
              href={`mailto:${CONTACT.email}?subject=Supporting%20SEN's%20first%20targets`}
              className="group mt-8 inline-flex w-fit items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-gold"
            >
              <span className="border-b border-gold/40 pb-1 transition-colors group-hover:border-gold">
                Help us reach them
              </span>
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <p className="mt-8 max-w-3xl text-[13px] leading-relaxed text-ink-soft">
            SEN is seeking partnerships, funding and technical support to launch
            and scale practical, community-led programmes. Audited accounts and
            annual reports will be published as programmes grow — accountability
            is part of the plan, not an afterthought.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ about ------------------------------ */
const PRINCIPLES = [
  {
    word: "Community-led",
    desc: "We listen, involve communities and build solutions around local priorities.",
  },
  {
    word: "Local",
    desc: "We value local knowledge, talent and participation.",
  },
  {
    word: "Connected",
    desc: "Health, livelihoods, education and opportunity are treated as interconnected challenges.",
  },
  {
    word: "Measurable",
    desc: "We track progress, learn from implementation and work towards demonstrable results.",
  },
];

export function AboutSen() {
  return (
    <section id="about" className="scroll-mt-24 bg-parchment py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>07 — About SEN</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(2.6rem,5.5vw,4.8rem)] leading-[1.02] text-ink">
                Rooted in community.
                <br />
                <em className="text-clay">Driven by possibility.</em>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-relaxed text-ink-soft md:text-base">
                <p>
                  Siaya Empowerment Network is a community-driven organisation
                  based in Siaya County, Kenya. We were formed around a simple
                  conviction: the challenges families face here — health,
                  livelihoods, education, opportunity — do not arrive one at a
                  time. So our programmes do not work that way either.
                </p>
                <p>
                  We bring communities and partners together around practical
                  solutions that can last — led by the people they serve,
                  grounded in local knowledge, integrated by design, built to be
                  sustainable, and measured honestly.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal dir="right" className="relative mx-auto max-w-sm lg:ml-auto">
              {/* offset backing plate */}
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 size-full border border-ink/15 bg-sand/60"
              />

              <div className="relative border border-ink/20 bg-bone shadow-[0_30px_60px_-30px_rgba(34,32,26,0.4)]">
                <div className="aspect-[3/3.8] overflow-hidden">
                  <img
                    src={IMG.elderPortrait.src}
                    alt={IMG.elderPortrait.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-[1.06]"
                  />
                </div>
              </div>
              <p className="mt-4 text-center text-[9px] font-bold uppercase tracking-[0.24em] text-ink-soft">
                Participants, farmers, students, educators, stewards —
                <br />
                the people SEN exists for and with
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 border-t border-ink/15 pt-12">
          <Reveal>
            <Eyebrow>Leadership</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal delay={80}>
              <article className="neu-raised-card overflow-hidden border border-ink/15 bg-bone">
                <div className="aspect-[4/5] overflow-hidden bg-parchment">
                  <img
                    src={IMG.bramwelAsewe.src}
                    alt={IMG.bramwelAsewe.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl text-ink">Bramwel Asewe</h3>
                  <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-clay">
                    Founder &amp; Director
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    Bramwel founded SEN to turn attention to the issues this
                    site exists to address into organised, practical work. A
                    journalist who has followed those same questions, he
                    started the organisation after seeing how often reporting
                    named the problem without a place for people to act. He now
                    leads SEN as Founder and Director, guiding its programmes
                    and advocacy so the work on the ground stays close to the
                    issues that first drew him in.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={140}>
              <article className="neu-raised-card overflow-hidden border border-ink/15 bg-bone">
                <div className="grid aspect-[4/5] place-items-center bg-pine text-bone">
                  <span className="font-display text-7xl text-gold">M</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl text-ink">Myra</h3>
                  <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-clay">
                    Marketing &amp; Communications Manager
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={200}>
              <article className="neu-raised-card overflow-hidden border border-ink/15 bg-bone">
                <div className="grid aspect-[4/5] place-items-center bg-clay text-bone">
                  <span className="font-display text-7xl text-gold">JG</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl text-ink">Jay Gitau</h3>
                  <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-clay">
                    Digital Communications Manager
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>

        {/* vision + mission */}
        <div className="mt-20 grid gap-6 lg:grid-cols-12">
          <Reveal dir="left" className="lg:col-span-7">
            <div className="neu-dark-pressed relative h-full overflow-hidden border border-pine-deep bg-pine p-9 text-bone md:p-14">
              <span aria-hidden className="pointer-events-none absolute -bottom-14 -right-6 select-none font-display text-[11rem] leading-none text-bone/[0.06]">
                V
              </span>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.34em] text-gold">
                Our vision
              </p>
              <blockquote className="relative mt-6 max-w-xl font-display text-2xl leading-snug md:text-[2.1rem]">
                “A thriving Siaya County where every resident has the
                opportunity, resources, and support for a{" "}
                <em className="text-gold">dignified, equitable, and sustainable</em>{" "}
                future.”
              </blockquote>
            </div>
          </Reveal>
          <Reveal dir="right" delay={120} className="lg:col-span-5 lg:mt-12">
            <div className="neu-raised-card h-full border-[3px] border-ink bg-bone p-9 md:p-12">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.34em] text-clay">
                Our mission
              </p>
              <blockquote className="mt-6 font-display text-xl leading-snug text-ink md:text-2xl">
                “To empower Siaya communities through integrated programmes that
                strengthen health, food security, education, and youth economic
                opportunity.”
              </blockquote>
              <span aria-hidden className="mt-8 block h-1 w-16 bg-clay" />
            </div>
          </Reveal>
        </div>

        {/* how we work */}
        <div className="mt-24">
          <Reveal>
            <h3 className="max-w-lg font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] text-ink">
              Change works best when <em className="text-clay">communities lead.</em>
            </h3>
          </Reveal>
          <div className="mt-10 border-t border-ink/15">
            {PRINCIPLES.map((p, i) => (
              <Reveal
                key={p.word}
                delay={i * 70}
                className="group grid gap-2 border-b border-ink/15 py-6 transition-all duration-300 hover:bg-sand/40 hover:pl-4 md:grid-cols-12 md:items-baseline md:gap-6 md:py-7"
              >
                <span className="font-display text-lg text-clay md:col-span-1">{`0${i + 1}`}</span>
                <h4 className="font-display text-2xl text-ink transition-colors duration-300 group-hover:text-clay md:col-span-4 md:text-3xl">
                  {p.word}
                </h4>
                <p className="text-sm leading-relaxed text-ink-soft md:col-span-7 md:text-[15px]">
                  {p.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
