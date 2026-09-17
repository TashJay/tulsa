import { ArrowRight, Eyebrow } from "./chrome";
import { Reveal } from "../lib/motion";
import { IMG, PILLARS } from "../data/content";
import { cn } from "../utils/cn";

function ProgrammeLabel({ children, tone = "dark" }: { children: React.ReactNode; tone?: "dark" | "light" }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.26em]",
        tone === "dark" ? "text-clay" : "text-gold"
      )}
    >
      <span aria-hidden className={cn("h-px w-8", tone === "dark" ? "bg-clay" : "bg-gold")} />
      Programme — {children}
    </p>
  );
}

function ItemList({ items, tone = "dark" }: { items: string[]; tone?: "dark" | "light" }) {
  return (
    <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "group flex items-start gap-3 text-sm font-semibold transition-transform duration-300 hover:translate-x-1",
            tone === "dark" ? "text-ink/85" : "text-bone/85"
          )}
        >
          <span
            aria-hidden
            className={cn(
              "mt-[7px] size-[7px] shrink-0 rotate-45 transition-colors duration-300",
              tone === "dark" ? "bg-clay group-hover:bg-pine" : "bg-gold group-hover:bg-bone"
            )}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------ pillars ---------------------------- */
export function Pillars() {
  const { health, land, opportunity } = PILLARS;
  return (
    <section id="work" className="scroll-mt-24">
      {/* section overture */}
      <div className="mx-auto max-w-[1400px] px-5 pb-4 pt-24 md:px-10 md:pt-32">
        <Reveal>
          <Eyebrow>02 — The response</Eyebrow>
        </Reveal>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal delay={80}>
            <h2 className="max-w-2xl font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02] text-ink">
              Three fronts. <em className="text-clay">One connected response.</em>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
              SEN's launch work concentrates on three interconnected programme
              areas — so progress in one strengthens progress in all.
            </p>
          </Reveal>
        </div>
      </div>

      {/* -------- 01 HEALTH -------- */}
      <article className="relative overflow-hidden border-t border-ink/10 py-24 md:py-32">
        <span aria-hidden className="text-outline-ink pointer-events-none absolute -top-8 right-4 select-none font-display text-[9rem] leading-none md:text-[15rem]">
          {health.num}
        </span>
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <ProgrammeLabel>{health.programme}</ProgrammeLabel>
            </Reveal>
            <Reveal delay={80}>
              <h3 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.05] text-ink">
                {health.statement}
              </h3>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft">{health.intro}</p>
            </Reveal>
            <Reveal delay={200} className="mt-9">
              <ItemList items={health.items} />
            </Reveal>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:ml-auto">
              {/* offset backing plate for depth */}
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 size-[84%] border border-ink/15 bg-sand/40"
              />

              <Reveal dir="right">
                <div className="neu-raised-card relative ml-auto w-[84%] border border-ink/20 bg-bone">
                  <div className="neu-pressed flex items-center justify-between border-b border-ink/10 bg-parchment/80 px-4 py-2.5 text-[9px] font-extrabold uppercase tracking-[0.22em] text-ink-soft">
                    <span className="flex items-center gap-2">
                      <span className="size-1.5 bg-clay" aria-hidden />
                      Pillar 01 · Community Health
                    </span>
                    <span>Outreach</span>
                  </div>
                  <div className="aspect-[3/3.8] overflow-hidden">
                    <img
                      src={IMG.healthNurses.src}
                      alt={IMG.healthNurses.alt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-[1.06]"
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal dir="right" delay={180} className="absolute -bottom-10 left-0 w-[54%] rotate-1">
                <figure className="neu-raised-card border-[6px] border-bone bg-bone transition-transform duration-500 hover:rotate-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={IMG.healthClinic.src}
                      alt={IMG.healthClinic.alt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover"
                    />
                  </div>
                  <figcaption className="px-1 pt-2 pb-1 text-[9px] font-bold uppercase tracking-[0.22em] text-ink-soft">
                    Care that reaches the community
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </article>

      {/* -------- 02 LAND -------- */}
      <article className="relative overflow-hidden bg-pine py-24 text-bone md:py-32">
        <span aria-hidden className="text-outline-bone pointer-events-none absolute -bottom-10 left-4 select-none font-display text-[9rem] leading-none md:text-[15rem]">
          {land.num}
        </span>
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 md:px-10 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <div className="relative">
              {/* offset backing frame */}
              <div
                aria-hidden
                className="absolute -bottom-3 -left-3 size-[88%] border border-bone/15 bg-pine-deep"
              />

              <Reveal dir="left">
                <div className="neu-dark-pressed relative w-[88%] border border-bone/20 bg-pine-deep">
                  <div className="flex items-center justify-between border-b border-bone/15 bg-pine-deep/90 px-4 py-2.5 text-[9px] font-extrabold uppercase tracking-[0.22em] text-bone/70">
                    <span className="flex items-center gap-2">
                      <span className="size-1.5 bg-gold" aria-hidden />
                      Pillar 02 · Land &amp; Livelihoods
                    </span>
                    <span className="text-gold">Field Action</span>
                  </div>
                  <div className="aspect-[4/4.2] overflow-hidden">
                    <img
                      src={IMG.maizeField.src}
                      alt={IMG.maizeField.alt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-[1.06]"
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal dir="left" delay={180} className="absolute -bottom-8 right-0 w-[46%] -rotate-1">
                <figure className="neu-dark-pressed border-[6px] border-pine-deep bg-pine-deep transition-transform duration-500 hover:rotate-0">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={IMG.treeSeedlings.src}
                      alt={IMG.treeSeedlings.alt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover"
                    />
                  </div>
                  <figcaption className="px-1 pt-2 pb-1 text-[9px] font-bold uppercase tracking-[0.22em] text-bone/70">
                    Tree planting · 6 June 2025
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <Reveal>
              <ProgrammeLabel tone="light">{land.programme}</ProgrammeLabel>
            </Reveal>
            <Reveal delay={80}>
              <h3 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.05]">
                {land.statement}
              </h3>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-bone/70">{land.intro}</p>
            </Reveal>
            <Reveal delay={200} className="mt-9">
              <ItemList items={land.items} tone="light" />
            </Reveal>
            <Reveal delay={260}>
              <a
                href="#stories"
                className="group mt-10 inline-flex items-center gap-3 border border-bone/25 px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.22em] text-bone/85 transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                Documented: tree planting — 6 June 2025
                <ArrowRight className="w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </article>

      {/* -------- 03 OPPORTUNITY -------- */}
      <article className="relative overflow-hidden bg-ink py-24 text-bone md:py-32">
        <span
          aria-hidden
          className="vertical-rl pointer-events-none absolute right-6 top-16 hidden select-none text-[11px] font-extrabold uppercase tracking-[0.5em] text-bone/25 lg:block"
        >
          Opportunity — Youth Skills &amp; Education Support
        </span>
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal dir="left">
              <div className="relative">
                {/* offset backing plate */}
                <div
                  aria-hidden
                  className="absolute -bottom-3 -right-3 size-full border border-bone/10 bg-pine-deep"
                />

                <div className="relative border border-bone/20 bg-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.65)]">
                  <div className="flex items-center justify-between border-b border-bone/15 bg-pine-deep/80 px-4 py-2.5 text-[9px] font-extrabold uppercase tracking-[0.22em] text-bone/70">
                    <span className="flex items-center gap-2">
                      <span className="size-1.5 bg-gold" aria-hidden />
                      Pillar 03 · Youth Skills &amp; Education Support
                    </span>
                    <span className="text-gold">Future Pathways</span>
                  </div>
                  <div className="aspect-[16/11] overflow-hidden">
                    <img
                      src={IMG.girlFlag.src}
                      alt={IMG.girlFlag.alt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-[1.05]"
                    />
                  </div>
                </div>

                <div className="neu-raised-sm absolute -bottom-6 right-6 flex items-center gap-3 border border-ink/30 bg-gold px-5 py-3 text-ink">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.22em]">
                    Education stays at the centre
                  </span>
                  <ArrowRight className="w-4" />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <span aria-hidden className="text-outline-bone select-none font-display text-[7rem] leading-none md:text-[9rem]">
              {opportunity.num}
            </span>
            <Reveal>
              <ProgrammeLabel tone="light">{opportunity.programme}</ProgrammeLabel>
            </Reveal>
            <Reveal delay={80}>
              <h3 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.05]">
                {opportunity.statement}
              </h3>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-[15px] leading-relaxed text-bone/70">{opportunity.intro}</p>
            </Reveal>
            <Reveal delay={200} className="mt-9">
              <ItemList items={opportunity.items} tone="light" />
            </Reveal>
            <Reveal delay={260}>
              <a
                href="#education"
                className="group mt-10 inline-flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-gold"
              >
                <span className="border-b border-gold/40 pb-1 transition-colors duration-300 group-hover:border-gold">
                  The education moment
                </span>
                <ArrowRight className="w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </article>
    </section>
  );
}

/* ------------------------- education moment ------------------------ */
const EDUCATION_STEPS = [
  { word: "Education", note: "Children stay in school and keep learning." },
  { word: "Skills", note: "Young people gain vocational and enterprise skills." },
  { word: "Employment", note: "Skills become real pathways into work." },
  { word: "Independence", note: "Economic independence strengthens whole families." },
];

export function EducationMoment() {
  return (
    <section id="education" className="relative scroll-mt-24 overflow-hidden bg-clay py-24 text-bone md:py-32">
      <span aria-hidden className="pointer-events-none absolute left-1/2 top-4 w-full -translate-x-1/2 select-none px-5 text-center font-display text-[clamp(2.2rem,8vw,7rem)] leading-none tracking-tight text-bone/[0.06]">
        elimu ni mwangaza
      </span>
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <Eyebrow tone="light">03 — The education moment</Eyebrow>
        </Reveal>
        <Reveal delay={90}>
          <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,6vw,5.2rem)] uppercase leading-[0.98]">
            Keeping children in school.
            <br />
            <em className="normal-case text-gold">Opening pathways to opportunity.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="border-t border-bone/30">
              {EDUCATION_STEPS.map((step, i) => (
                <Reveal
                  key={step.word}
                  delay={i * 90}
                  className="group flex items-baseline gap-5 border-b border-bone/30 py-5 transition-colors duration-300 hover:bg-clay-deep/40 md:gap-8 md:px-4"
                >
                  <span className="font-display text-xl text-bone/60">{`0${i + 1}`}</span>
                  <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <span className="font-display text-3xl transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                      {step.word}
                    </span>
                    <span className="max-w-xs text-[13px] leading-relaxed text-bone/75">{step.note}</span>
                  </div>
                  <span aria-hidden className="font-display text-2xl text-gold">→</span>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal dir="right">
              <p className="text-[15px] leading-relaxed text-bone/85">
                Education is the thread that ties all of SEN's work together. A
                child who stays in school becomes a young person with options —
                and a community with a stronger future. That is why education
                access, school retention, support for vulnerable children and
                girls' education run through everything we do.
              </p>
            </Reveal>
            <Reveal dir="right" delay={150} className="mt-9">
              <figure className="neu-raised-card w-[78%] rotate-2 border-[6px] border-bone bg-bone transition-transform duration-500 hover:rotate-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={IMG.outdoorClass.src}
                    alt={IMG.outdoorClass.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                </div>
                <figcaption className="px-1 pt-2 pb-1 text-[9px] font-bold uppercase tracking-[0.22em] text-ink-soft">
                  Every classroom is a beginning
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
