import { useCallback, useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Eyebrow } from "./chrome";
import { Reveal, usePrefersReducedMotion } from "../lib/motion";
import { FIELD_STORIES, GREENPEACE_THEMES, type FieldImage } from "../data/content";
import { cn } from "../utils/cn";

/* ------------------------------ lightbox --------------------------- */
function Lightbox({
  images,
  index,
  onClose,
  onNav,
}: {
  images: FieldImage[];
  index: number;
  onClose: () => void;
  onNav: (dir: 1 | -1) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onNav]);

  const img = images[index];
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-ink/95 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 grid size-12 place-items-center border border-bone/30 text-bone transition-colors hover:border-clay hover:text-clay"
      >
        <svg viewBox="0 0 14 14" className="size-4" aria-hidden><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" /></svg>
      </button>

      <button
        aria-label="Previous photo"
        onClick={(e) => { e.stopPropagation(); onNav(-1); }}
        className="absolute left-3 top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center border border-bone/30 text-bone transition-colors hover:border-gold hover:text-gold md:left-8"
      >
        <ArrowRight className="w-5 rotate-180" />
      </button>
      <button
        aria-label="Next photo"
        onClick={(e) => { e.stopPropagation(); onNav(1); }}
        className="absolute right-3 top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center border border-bone/30 text-bone transition-colors hover:border-gold hover:text-gold md:right-8"
      >
        <ArrowRight className="w-5" />
      </button>

      <figure className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="story-enter max-h-[74vh] w-auto border-[6px] border-bone object-contain shadow-2xl"
        />
        <figcaption className="mt-4 flex items-center justify-between gap-6 text-xs font-semibold tracking-wide text-bone/70">
          <span>{img.alt}</span>
          <span className="shrink-0 text-bone/50">{index + 1} / {images.length}</span>
        </figcaption>
      </figure>
    </div>
  );
}

export { Lightbox };

/* ---------------------------- field journal ------------------------ */
export function FieldJournal() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<{ images: FieldImage[]; index: number } | null>(null);
  const reduced = usePrefersReducedMotion();
  const story = FIELD_STORIES[active];

  const openLightbox = useCallback((images: FieldImage[], index: number) => {
    setLightbox({ images, index });
  }, []);

  const nav = useCallback(
    (dir: 1 | -1) => {
      setLightbox((lb) =>
        lb ? { ...lb, index: (lb.index + dir + lb.images.length) % lb.images.length } : lb
      );
    },
    []
  );

  return (
    <section id="stories" className="relative scroll-mt-24 bg-parchment py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <Eyebrow>04 — Real work · Field journal</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(2.6rem,5.5vw,4.8rem)] leading-[1.02] text-ink">
                From commitment <em className="text-clay">to action.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <p className="max-w-sm font-display text-xl leading-snug text-ink-soft md:text-2xl">
              “Real communities. Practical action. A growing body of work.”
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* journal index */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-ink-soft">
                Journal entries — 2025
              </p>
              <div className="mt-4 border-t border-ink/15">
                {FIELD_STORIES.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                    className={cn(
                      "group relative flex w-full items-center justify-between gap-4 border-b border-ink/15 px-4 py-5 text-left transition-all duration-300",
                      active === i
                        ? "neu-dark-pressed bg-pine text-bone"
                        : "text-ink hover:bg-sand/40 hover:pl-6"
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "absolute left-0 top-0 h-full w-[3px] bg-clay transition-transform duration-300",
                        active === i ? "scale-y-100" : "scale-y-0"
                      )}
                    />
                    <span>
                      <span className={cn(
                        "block text-[10px] font-extrabold uppercase tracking-[0.24em]",
                        active === i ? "text-gold" : "text-clay"
                      )}>
                        {s.date}
                        {s.location ? ` · ${s.location}` : ""}
                      </span>
                      <span className="mt-1 block font-display text-xl leading-tight md:text-2xl">
                        {s.title}
                      </span>
                    </span>
                    <ArrowRight
                      className={cn(
                        "w-5 shrink-0 transition-all duration-300",
                        active === i ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                      )}
                    />
                  </button>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-ink-soft">
                Entries are documented field activities and outreach —
                photographed as they happened, reported as they are.
              </p>
            </div>
            <a
              href="/gallery"
              className="group inline-flex items-center gap-3 border border-ink/20 px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink transition-colors hover:border-clay hover:text-clay"
            >
              Open gallery
              <ArrowRight className="w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* story panel */}
          <div className="lg:col-span-7">
            <article key={story.id} className={cn(!reduced && "story-enter")}>
              <div className="neu-raised-card relative overflow-hidden border border-ink/15 bg-bone">
                <button
                  onClick={() => openLightbox([story.main, ...story.gallery], 0)}
                  aria-label={`Open photo: ${story.main.alt}`}
                  className="group block w-full"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={story.main.src}
                      alt={story.main.alt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <span className="neu-raised-sm absolute right-4 top-4 grid size-11 place-items-center border border-ink/15 bg-bone text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="size-4" />
                  </span>
                </button>
                <span className="neu-dark-pressed absolute left-4 top-4 border border-bone/10 bg-ink/90 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[0.24em] text-bone">
                  {story.tag}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-ink-soft">
                <span className="text-clay">{story.date}</span>
                {story.location && <span>{story.location}</span>}
                <a href={story.programme.href} className="flex items-center gap-2 text-pine underline-offset-4 transition-colors hover:text-clay hover:underline">
                  {story.programme.label}
                </a>
              </div>

              <h3 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
                {story.headline}
              </h3>

              <div className="mt-4 max-w-2xl space-y-4 text-[15px] leading-relaxed text-ink-soft">
                {story.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* thumbnails */}
              <div className="mt-8 grid grid-cols-4 gap-3">
                {story.gallery.map((img, i) => (
                  <button
                    key={img.src}
                    onClick={() => openLightbox([story.main, ...story.gallery], i + 1)}
                    aria-label={`Open photo ${i + 2}: ${img.alt}`}
                    className="group overflow-hidden border border-ink/10"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>
                  </button>
                ))}
              </div>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.24em] text-ink-soft">
                Tap any photograph to view the field record
              </p>
            </article>
          </div>
        </div>
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNav={nav}
        />
      )}
    </section>
  );
}

/* ------------------------- partnership band ------------------------ */
export function PartnershipStrip() {
  return (
    <section className="relative overflow-hidden bg-pine-deep py-20 text-bone md:py-28">
      <span
        aria-hidden
        className="vertical-rl pointer-events-none absolute right-5 top-10 hidden select-none text-[10px] font-extrabold uppercase tracking-[0.5em] text-bone/20 lg:block"
      >
        Documented collaboration — Kisumu County
      </span>
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow tone="light">05 — Partnership</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,4.6vw,4rem)] leading-[1.03]">
              Partnership <em className="text-gold">multiplies impact.</em>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-bone/70">
              SEN conducted capacity-building work in Kisumu in collaboration
              with <span className="font-bold text-bone">Greenpeace Africa</span> —
              evidence that when community organisations and established
              partners work side by side, practical solutions reach further,
              faster.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <p className="text-[13px] font-extrabold uppercase tracking-[0.26em] text-bone/50">
              The collaboration connected
            </p>
          </Reveal>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {GREENPEACE_THEMES.map((theme, i) => (
              <Reveal
                as="span"
                key={theme}
                delay={i * 60}
                dir="none"
                className="cursor-default border border-bone/25 px-4 py-2.5 text-xs font-bold tracking-wide text-bone/85 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
              >
                {theme}
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-8 border-l-2 border-gold pl-5 font-display text-xl leading-snug text-bone/80 md:text-2xl">
              Collaboration like this is how community action grows into lasting
              opportunity — shared knowledge, shared effort, shared results.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
