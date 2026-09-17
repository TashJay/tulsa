import { useEffect, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";
import { CONTACT, NAV_LINKS } from "../data/content";
import logoUrl from "../../images/logo.png";

/* ------------------------------ grain ------------------------------ */
export function Grain() {
  return <div aria-hidden className="grain" />;
}

/* ------------------------- scroll progress ------------------------- */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        setProgress(max > 0 ? (doc.scrollTop || document.body.scrollTop) / max : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-transparent">
      <div
        className="h-full bg-clay"
        style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}
      />
    </div>
  );
}

/* ----------------------------- eyebrow ----------------------------- */
export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.3em]",
        tone === "dark" ? "text-ink-soft" : "text-bone/70",
        className
      )}
    >
      <span aria-hidden className="h-px w-10 shrink-0 bg-clay" />
      {children}
    </p>
  );
}

/* ------------------------------- icons ----------------------------- */
export function SproutMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path d="M16 27V14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M16 16c0-4.6-3.4-8-8-8 0 4.6 3.4 8 8 8Z" fill="currentColor" opacity="0.85" />
      <path d="M16 13.5c0-4.6 3.4-8 8-8 0 4.6-3.4 8-8 8Z" fill="currentColor" opacity="0.55" />
    </svg>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 12" className={className} aria-hidden fill="none">
      <path d="M0 6h22M17 1l5.5 5L17 11" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" className={className} aria-hidden fill="none">
      <path d="M2 12 12 2M4 2h8v8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

/* ----------------------- decorative contours ----------------------- */
export function Contours({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden fill="none">
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <ellipse
          key={i}
          cx="300"
          cy="300"
          rx={60 + i * 42}
          ry={48 + i * 40}
          stroke="currentColor"
          strokeWidth="1.1"
          transform={`rotate(${i * -7} 300 300)`}
        />
      ))}
    </svg>
  );
}

/* ------------------------------ marquee ---------------------------- */
export function Marquee() {
  const items = [
    "Community Action",
    "Lasting Opportunity",
    "Health",
    "Land",
    "Opportunity",
    "Siaya County — Kenya",
  ];
  const row = (hidden: boolean) => (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center whitespace-nowrap"
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 font-display text-xl tracking-wide text-bone md:px-8 md:text-2xl">
            {item}
          </span>
          <span aria-hidden className="text-sm text-gold">✺</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="relative z-10 overflow-hidden py-5">
      <div className="-mx-2 -rotate-[0.7deg] border-y border-pine-deep bg-pine py-3 shadow-[0_12px_30px_-18px_rgba(19,32,25,0.8)]">
        <div className="marquee-track flex w-max">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------- nav ------------------------------ */
const linkHref = (href: string) =>
  href.startsWith("#") && window.location.pathname !== "/" ? `/${href}` : href;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-all duration-500",
          scrolled
            ? "border-b border-ink/10 bg-bone/95 py-3 shadow-[0_10px_30px_-20px_rgba(34,32,26,0.5)]"
            : "border-b border-transparent bg-transparent py-5"
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10">
          <a href="/" className="group flex items-center gap-3" aria-label="Siaya Empowerment Network — home">
            <img
              src={logoUrl}
              alt=""
              className="h-[4.2rem] w-[9.6rem] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="hidden leading-none sm:block">
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.34em] text-ink-soft">
                Community action · Lasting opportunity
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={linkHref(l.href)}
                className="nav-link text-[11px] font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:text-clay"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={linkHref("#involved")}
              className="neu-btn group hidden items-center gap-2 bg-clay px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-bone sm:inline-flex"
            >
              Partner with SEN
              <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="neu-raised-sm relative grid size-11 place-items-center border border-ink/15 bg-bone text-ink lg:hidden"
            >
              <span
                className={cn(
                  "absolute h-[2px] w-5 bg-ink transition-all duration-300",
                  open ? "rotate-45" : "-translate-y-[4px]"
                )}
              />
              <span
                className={cn(
                  "absolute h-[2px] w-5 bg-ink transition-all duration-300",
                  open ? "-rotate-45" : "translate-y-[4px]"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[55] flex flex-col bg-pine-deep text-bone transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-8 pt-24 pb-10">
          <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.34em] text-bone/50">
            Siaya County — Kenya
          </p>
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={linkHref(l.href)}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
              className={cn(
                "border-b border-bone/10 py-4 font-display text-4xl transition-all duration-500 hover:pl-3 hover:text-gold",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href={linkHref("#involved")}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? "480ms" : "0ms" }}
            className={cn(
              "mt-8 inline-flex w-fit items-center gap-3 bg-clay px-7 py-4 text-xs font-extrabold uppercase tracking-[0.22em] transition-all duration-500 hover:bg-clay-deep",
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
          >
            Partner with SEN <ArrowUpRight className="size-3.5" />
          </a>
        </div>
        <div className="border-t border-bone/10 px-8 py-5 text-xs font-semibold tracking-wide text-bone/60">
          {CONTACT.email} · {CONTACT.phone1}
        </div>
      </div>
    </>
  );
}

/* ------------------------------- footer ---------------------------- */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-bone">
      <Contours className="pointer-events-none absolute -right-40 -top-40 size-[560px] text-bone/[0.05]" />
      <div className="relative mx-auto max-w-[1400px] px-5 pb-10 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt="Siaya Empowerment Network"
                className="h-24 w-[14.4rem] object-contain"
              />
            </div>
            <p className="mt-8 font-display text-4xl leading-[1.05] md:text-5xl">
              Community action.
              <br />
              <em className="text-gold">Lasting opportunity.</em>
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/60">
              To empower Siaya communities through integrated programmes that
              strengthen health, food security, education, and youth economic
              opportunity.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-bone/40">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={linkHref(l.href)}
                    className="nav-link text-sm font-semibold text-bone/75 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-bone/40">
              Programmes
            </p>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-bone/75">
              <li>Community Health &amp; HIV Prevention</li>
              <li>Climate-Smart Agriculture &amp; Environmental Sustainability</li>
              <li>Youth Skills &amp; Education Support</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-bone/40">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="font-semibold text-bone/85">{CONTACT.address}</li>
              <li>
                <a href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`} className="font-semibold text-bone/75 transition-colors hover:text-gold">
                  {CONTACT.phone1}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone2.replace(/\s/g, "")}`} className="font-semibold text-bone/75 transition-colors hover:text-gold">
                  {CONTACT.phone2}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="font-semibold text-gold underline-offset-4 hover:underline">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            <a
              href={`mailto:${CONTACT.email}?subject=Partnering%20with%20SEN`}
              className="group mt-7 inline-flex items-center gap-2 border border-bone/30 px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.2em] transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Start a conversation
              <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-bone/10 pt-6 text-[11px] font-semibold tracking-wide text-bone/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} Siaya Empowerment Network · Siaya County, Kenya
          </p>
          <p className="flex gap-5">
            <a href="/" className="transition-colors hover:text-bone/70">Privacy</a>
            <a href="/" className="transition-colors hover:text-bone/70">Terms</a>
            <a href="/" className="transition-colors hover:text-bone/70">Back to top ↑</a>
          </p>
        </div>
        <p className="mt-4 text-[10px] leading-relaxed text-bone/30">
          Field photography documents SEN programme areas and community activities; supplementary imagery via Pexels contributors.
        </p>
      </div>
    </footer>
  );
}
