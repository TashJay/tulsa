import { ArrowRight, ArrowUpRight, Contours, Eyebrow } from "./chrome";
import { Reveal } from "../lib/motion";
import { CONTACT, PATHWAYS } from "../data/content";

/* --------------------------- where we work ------------------------- */
const PLACES = [
  {
    label: "Home base",
    place: "Siaya Town, Siaya County",
    desc: "Where SEN is rooted, registered and coordinated — the organisational home.",
    chip: "Established base",
    tone: "solid" as const,
  },
  {
    label: "Initial pilot focus",
    place: "Bondo sub-county",
    desc: "SEN's launch plan begins with focused pilots in selected sub-counties — Bondo is the intended first programme area.",
    chip: "Planned",
    tone: "outline" as const,
  },
  {
    label: "Documented outreach",
    place: "Kisumu County",
    desc: "2025 field activities alongside local community groups and partners — community clean-ups, capacity building and training.",
    chip: "2025 field record",
    tone: "clay" as const,
  },
  {
    label: "Future expansion",
    place: "Neighbouring sub-counties",
    desc: "Growth into further communities is planned as programmes mature — always at the pace communities lead.",
    chip: "Planned expansion",
    tone: "outline" as const,
  },
];

export function WhereWeWork() {
  return (
    <section id="where" className="relative scroll-mt-24 overflow-hidden bg-bone py-24 md:py-32">
      <Contours className="pointer-events-none absolute -left-52 top-10 size-[620px] text-moss/20" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow>08 — Where we work</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 font-display text-[clamp(2.4rem,4.6vw,4rem)] leading-[1.03] text-ink">
                  Starting in Siaya. <em className="text-clay">Growing with the community.</em>
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft">
                  Depth before distance: SEN begins with focused work in
                  selected communities, so every programme can take real root
                  before it spreads.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="neu-pressed mt-8 flex items-center gap-3 border border-ink/10 bg-parchment/60 px-5 py-4">
                  <svg viewBox="0 0 24 24" className="size-6 shrink-0 text-clay" aria-hidden fill="none">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z" stroke="currentColor" strokeWidth="1.6" />
                    <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                  <p className="text-xs font-bold leading-relaxed text-ink">
                    Siaya County remains SEN's primary organisational focus —
                    activities elsewhere are partnerships and outreach.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-ink/15">
              {PLACES.map((row, i) => (
                <Reveal
                  key={row.place}
                  delay={i * 80}
                  className="group grid gap-3 border-b border-ink/15 py-8 transition-all duration-300 hover:bg-parchment/70 hover:pl-4 md:grid-cols-12 md:items-center md:gap-6 md:py-10"
                >
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-ink-soft md:col-span-3">
                    {row.label}
                  </p>
                  <h3 className="font-display text-2xl leading-tight text-ink transition-colors duration-300 group-hover:text-clay md:col-span-4 md:text-3xl">
                    {row.place}
                  </h3>
                  <div className="md:col-span-5">
                    <span
                      className={
                        row.tone === "solid"
                          ? "neu-dark-pressed mb-2 inline-block bg-pine px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.2em] text-bone"
                          : row.tone === "clay"
                            ? "neu-dark-pressed mb-2 inline-block bg-clay px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.2em] text-bone"
                            : "neu-pressed mb-2 inline-block border border-ink/15 bg-bone px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.2em] text-ink-soft"
                      }
                    >
                      {row.chip}
                    </span>
                    <p className="text-[13px] leading-relaxed text-ink-soft">{row.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- get involved ------------------------- */
const SUPPORT_EXAMPLES = [
  "Farmer training",
  "Community health outreach",
  "Youth skills development",
  "Education & school retention",
  "Environmental initiatives",
];

export function GetInvolved() {
  return (
    <section id="involved" className="relative scroll-mt-24 overflow-hidden bg-clay py-24 text-bone md:py-32">
      <span aria-hidden className="pointer-events-none absolute -bottom-8 right-0 select-none font-display text-[18vw] leading-none text-bone/[0.07]">
        Act
      </span>
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <Eyebrow tone="light">09 — Action</Eyebrow>
        </Reveal>
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal delay={80}>
            <h2 className="max-w-2xl font-display text-[clamp(2.6rem,6vw,5.2rem)] leading-[1.0]">
              Be part of what <em className="text-gold">comes next.</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-sm font-display text-xl leading-snug text-bone/80 md:text-2xl">
              “Lasting change happens when communities, organisations and
              individuals come together to act.”
            </p>
          </Reveal>
        </div>

        {/* pathways */}
        <div className="mt-14 border-t border-bone/30">
          {PATHWAYS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 70}
              className="group"
            >
              <a
                href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(p.title)}`}
                className="grid items-center gap-2 border-b border-bone/30 py-6 transition-all duration-300 hover:bg-clay-deep/60 hover:pl-4 md:grid-cols-12 md:gap-6 md:py-7"
              >
                <span className="font-display text-lg text-bone/60 md:col-span-1">{p.num}</span>
                <h3 className="font-display text-2xl transition-transform duration-300 group-hover:translate-x-1 md:col-span-4 md:text-[2rem]">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-bone/80 md:col-span-6">{p.desc}</p>
                <span className="hidden justify-end md:col-span-1 md:flex">
                  <ArrowUpRight className="size-5 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* closing invitation */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-display text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.08]">
                Help turn community action into{" "}
                <em className="text-gold">lasting opportunity.</em>
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-bone/80">
                Your partnership can help SEN launch and scale practical
                programmes across communities in Western Kenya.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {SUPPORT_EXAMPLES.map((s) => (
                  <span
                    key={s}
                    className="cursor-default border border-bone/30 px-4 py-2 text-xs font-bold tracking-wide text-bone/85 transition-colors duration-300 hover:border-gold hover:text-gold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal dir="right" delay={120} className="lg:col-span-5">
            <div className="neu-raised-card border border-bone/10 bg-ink p-9 text-bone md:p-11">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-gold">
                No forms. No waiting.
              </p>
              <p className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                Start a <em className="text-gold">conversation.</em>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-bone/65">
                Write to us, or call — a real person in Siaya will answer.
              </p>
              <a
                href={`mailto:${CONTACT.email}?subject=Starting%20a%20conversation%20with%20SEN`}
                className="neu-btn group mt-7 flex w-full items-center justify-between bg-clay px-6 py-4 text-[11px] font-extrabold uppercase tracking-[0.22em] text-bone hover:bg-gold hover:text-ink"
              >
                {CONTACT.email}
                <ArrowRight className="w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <div className="neu-dark-pressed mt-4 grid gap-2 border border-bone/10 bg-pine-deep/50 p-4 text-sm font-semibold text-bone/80">
                <a href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`} className="transition-colors hover:text-gold">
                  {CONTACT.phone1}
                </a>
                <a href={`tel:${CONTACT.phone2.replace(/\s/g, "")}`} className="transition-colors hover:text-gold">
                  {CONTACT.phone2}
                </a>
              </div>
              <p className="mt-5 border-t border-bone/15 pt-4 text-[11px] leading-relaxed text-bone/50">
                {CONTACT.address}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
