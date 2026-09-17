import { ArrowRight, Contours, Eyebrow } from "./chrome";
import { Reveal } from "../lib/motion";
import { IMG } from "../data/content";

/* ------------------------------- hero ------------------------------ */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-bone pt-28 md:pt-36">
      {/* ambient layer */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(58rem 40rem at 82% -8%, rgba(223,210,180,0.85), transparent 62%), radial-gradient(40rem 30rem at -10% 108%, rgba(117,130,107,0.18), transparent 60%)",
        }}
      />
      <Contours className="pointer-events-none absolute -right-44 -top-28 size-[620px] text-moss/25" />
      <Contours className="pointer-events-none absolute -bottom-72 -left-56 size-[560px] text-clay/15" />

      <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 pb-20 md:px-10 lg:grid-cols-12 lg:gap-8 lg:pb-28">
        {/* words */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <div className="mask-line">
            <span style={{ animationDelay: "0.05s" }}>
              <span className="neu-pressed inline-flex items-center gap-3 border border-ink/10 bg-parchment/60 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.32em] text-ink-soft">
                <span className="size-2 bg-clay" aria-hidden />
                Siaya County&ensp;•&ensp;Kenya
                <span className="hidden h-px w-12 bg-ink/20 sm:block" aria-hidden />
                <span className="hidden text-moss sm:inline">Community-driven</span>
              </span>
            </span>
          </div>

          <h1 className="mt-7 font-display text-[clamp(3.1rem,8.2vw,7rem)] leading-[0.96] tracking-[-0.01em] text-ink">
            <span className="mask-line">
              <span style={{ animationDelay: "0.16s" }}>Building stronger</span>
            </span>
            <span className="mask-line">
              <span style={{ animationDelay: "0.3s" }}>
                communities <em className="text-clay">from</em>
              </span>
            </span>
            <span className="mask-line">
              <span style={{ animationDelay: "0.44s" }}>
                <em className="text-clay">the ground up.</em>
              </span>
            </span>
          </h1>

          <div className="mask-line mt-8">
            <span style={{ animationDelay: "0.62s" }}>
              <p className="max-w-md text-[15px] leading-relaxed text-ink-soft md:text-base">
                Siaya Empowerment Network works with communities to strengthen
                health, resilient livelihoods, education and youth opportunity —
                because connected challenges deserve connected solutions.
              </p>
            </span>
          </div>

          <div className="mask-line mt-10">
            <span style={{ animationDelay: "0.76s" }}>
              <span className="flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="neu-btn group inline-flex items-center gap-3 bg-pine px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.22em] text-bone hover:bg-clay"
                >
                  Explore our work
                  <ArrowRight className="w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
                <a
                  href="#involved"
                  className="neu-btn group inline-flex items-center gap-3 border border-ink/20 bg-bone px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.22em] text-ink hover:border-clay hover:bg-clay hover:text-bone"
                >
                  Partner with SEN
                </a>
              </span>
            </span>
          </div>

          <div className="mask-line mt-12">
            <span style={{ animationDelay: "0.9s" }}>
              <span className="flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-lg text-ink-soft">
                <span>Health</span>
                <span aria-hidden className="text-clay">→</span>
                <span>Land</span>
                <span aria-hidden className="text-clay">→</span>
                <span>Opportunity</span>
                <span aria-hidden className="text-clay">→</span>
                <em className="text-pine">Stronger communities</em>
              </span>
            </span>
          </div>
        </div>

        {/* imagery */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* tactile offset backing plate */}
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 size-[86%] border border-ink/15 bg-sand/50"
            />

            {/* main documentary portrait — sharp rectilinear frame */}
            <Reveal dir="none" className="relative ml-auto w-[86%]">
              <div className="neu-raised-card relative border border-ink/20 bg-bone">
                <div className="aspect-[3/3.8] overflow-hidden">
                  <img
                    src={IMG.heroPortrait.src}
                    alt={IMG.heroPortrait.alt}
                    fetchPriority="high"
                    className="kenburns size-full object-cover"
                  />
                </div>

                {/* documentary caption strip */}
                <div className="neu-pressed flex items-center justify-between border-t border-ink/10 bg-bone px-4 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-pine">
                  <span>Health · Land · Opportunity</span>
                  <span className="text-clay">Western Kenya</span>
                </div>
              </div>
            </Reveal>

            {/* overlapping landscape photo — sharp rectilinear frame */}
            <Reveal dir="none" delay={200} className="absolute -bottom-8 left-0 w-[54%] -rotate-2">
              <figure className="neu-raised-card border-[6px] border-bone bg-bone transition-transform duration-500 hover:rotate-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={IMG.aerialFarms.src}
                    alt={IMG.aerialFarms.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-105"
                  />
                </div>
                <figcaption className="px-1 pt-2 pb-1 text-[9px] font-bold uppercase tracking-[0.22em] text-ink-soft">
                  Smallholder farms · Western Kenya
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="relative mx-auto hidden max-w-[1400px] items-center gap-4 px-10 pb-10 lg:flex">
        <span className="relative h-14 w-px overflow-hidden bg-ink/15">
          <span className="scroll-cue absolute inset-0 bg-clay" />
        </span>
        <span className="text-[10px] font-extrabold uppercase tracking-[0.34em] text-ink-soft">
          Scroll — the story unfolds
        </span>
      </div>
    </section>
  );
}

/* ------------------------------ intro ------------------------------ */
const CHAIN = [
  "Health access",
  "Climate-vulnerable livelihoods",
  "Education barriers",
  "Youth unemployment",
  "Environmental pressure",
];

export function Intro() {
  return (
    <section className="relative bg-bone py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal className="lg:sticky lg:top-32">
            <Eyebrow>01 — The people</Eyebrow>
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              Behind every statistic in Siaya County is a farmer, a mother, a
              student, a young person looking for a fair shot. They are not
              waiting to be rescued — they are organising, planting, learning
              and building. SEN exists to walk that road with them.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02] text-ink">
              Change begins <em className="text-clay">with people.</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              In Siaya County, as across much of Western Kenya, families
              navigate challenges that rarely arrive alone. Poverty and limited
              access to health services. Livelihoods exposed to a changing
              climate. Barriers that keep children out of school. Youth
              unemployment. Environmental pressure on the land that feeds
              everyone.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <blockquote className="mt-10 border-l-[3px] border-clay pl-6 md:pl-8">
              <p className="max-w-xl font-display text-2xl leading-snug text-pine md:text-[2rem]">
                “Because these challenges are connected, our response must be
                connected too.”
              </p>
            </blockquote>
          </Reveal>

          {/* the connected chain */}
          <Reveal delay={240}>
            <div className="mt-12 border-y border-ink/15 py-6">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-ink-soft">
                One community. Connected realities.
              </p>
              <ul className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                {CHAIN.map((item, i) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="cursor-default font-display text-lg text-ink transition-colors duration-300 hover:text-clay md:text-xl">
                      {item}
                    </span>
                    {i < CHAIN.length - 1 && (
                      <span aria-hidden className="font-display text-lg text-clay">+</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
