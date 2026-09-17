import { useCallback, useMemo, useState } from "react";
import { ArrowRight, Eyebrow, Footer, Grain, Nav, ScrollProgress } from "./chrome";
import { FIELD_STORIES, LOCAL_IMAGES, type FieldImage } from "../data/content";
import { Lightbox } from "./journal";
import { Reveal } from "../lib/motion";
import { cn } from "../utils/cn";

type GalleryFilter = "All" | "Environment" | "Community" | "Team Building" | "Opportunity";

const FILTERS: GalleryFilter[] = ["All", "Environment", "Community", "Team Building", "Opportunity"];

const filterForStory = (title: string): Exclude<GalleryFilter, "All"> =>
  title.toLowerCase().includes("youth")
    ? "Opportunity"
    : title.toLowerCase().includes("community")
      ? "Community"
      : title.toLowerCase().includes("team building")
        ? "Team Building"
      : "Environment";

export function GalleryPage() {
  const [filter, setFilter] = useState<GalleryFilter>("All");
  const [visibleCount, setVisibleCount] = useState(24);
  const [lightbox, setLightbox] = useState<{ images: FieldImage[]; index: number } | null>(null);

  const entries = useMemo(
    () => {
      const storyEntries = FIELD_STORIES.flatMap((story) => {
        const images = [story.main, ...story.gallery];
        return images.map((image, index) => ({
          ...image,
          storyId: story.id,
          storyTitle: story.title,
          date: story.date,
          category: filterForStory(story.title),
          index,
          images,
        }));
      });

      const representedSources = new Set(storyEntries.map((entry) => entry.src));
      const additionalEntries = LOCAL_IMAGES
        .filter((image) => !representedSources.has(image.src))
        .map((image) => ({
          ...image,
          storyId: image.folder.toLowerCase().replace(" ", "-"),
          storyTitle: image.folder === "Environment" ? "Environment" : image.folder,
          date: "2025",
          category: image.folder,
          index: 0,
          images: [{ src: image.src, alt: image.alt }],
        }));

      return [...storyEntries, ...additionalEntries].filter(
        (entry) => filter === "All" || entry.category === filter
      );
    },
    [filter]
  );

  const openLightbox = useCallback((images: FieldImage[], index: number) => {
    setLightbox({ images, index });
  }, []);

  const navigateLightbox = useCallback((direction: 1 | -1) => {
    setLightbox((current) =>
      current
        ? { ...current, index: (current.index + direction + current.images.length) % current.images.length }
        : current
    );
  }, []);

  const visibleEntries = entries.slice(0, visibleCount);

  return (
    <div className="overflow-x-clip bg-bone font-sans text-ink antialiased">
      <ScrollProgress />
      <Grain />
      <Nav />
      <main>
        <section className="bg-pine-deep px-5 pb-20 pt-36 text-bone md:px-10 md:pb-28 md:pt-44">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <Eyebrow tone="light">SEN visual archive</Eyebrow>
            </Reveal>
            <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
              <Reveal delay={80} className="lg:col-span-8">
                <h1 className="max-w-4xl font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9]">
                  People, place
                  <br />
                  <em className="text-gold">and possibility.</em>
                </h1>
              </Reveal>
              <Reveal delay={160} className="lg:col-span-4">
                <p className="max-w-sm text-base leading-relaxed text-bone/70 md:text-lg">
                  A growing record of the people, partnerships and practical
                  action shaping a more resilient Siaya.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="flex flex-col gap-6 border-b border-ink/15 pb-7 md:flex-row md:items-end md:justify-between">
              <div>
                <Eyebrow>Field photography · 2025</Eyebrow>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
                  Photographs from SEN&apos;s environmental work, outreach and
                  community training. Select any image to view the field record.
                </p>
              </div>
              <div className="flex flex-wrap gap-2" aria-label="Filter gallery">
                {FILTERS.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setFilter(item);
                      setVisibleCount(24);
                    }}
                    aria-pressed={filter === item}
                    className={cn(
                      "border px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.2em] transition-colors",
                      filter === item
                        ? "border-pine bg-pine text-bone"
                        : "border-ink/20 text-ink-soft hover:border-clay hover:text-clay"
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
              {visibleEntries.map((entry, index) => (
                <Reveal
                  key={`${entry.storyId}-${entry.src}`}
                  delay={(index % 3) * 60}
                  className="mb-5 break-inside-avoid"
                >
                  <button
                    onClick={() => openLightbox(entry.images, entry.index)}
                    aria-label={`Open ${entry.alt}`}
                    className="group block w-full text-left"
                  >
                    <div className="neu-raised-card relative overflow-hidden border border-ink/10 bg-parchment">
                      <img
                        src={entry.src}
                        alt={entry.alt}
                        loading="lazy"
                        decoding="async"
                        className="block w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/85 via-ink/55 to-transparent px-5 pb-5 pt-14 text-bone opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-gold">
                          {entry.category} · {entry.date}
                        </p>
                        <p className="mt-1 font-display text-xl">{entry.storyTitle}</p>
                      </div>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>

            {visibleCount < entries.length && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setVisibleCount((count) => count + 24)}
                  className="neu-btn border border-ink/20 bg-bone px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink transition-colors hover:border-clay hover:text-clay"
                >
                  Load more photos
                  <span className="ml-2 text-ink-soft">
                    ({entries.length - visibleCount} remaining)
                  </span>
                </button>
              </div>
            )}

            <div className="mt-20 border-t border-ink/15 pt-8">
              <a href="/#stories" className="group inline-flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-pine transition-colors hover:text-clay">
                Read the field journal
                <ArrowRight className="w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNav={navigateLightbox}
        />
      )}
    </div>
  );
}
