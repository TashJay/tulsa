import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

/* Does the visitor prefer reduced motion? */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* One-shot intersection observer */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.16
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* Scroll-reveal wrapper */
export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  dir = "up",
  style,
}: {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  delay?: number;
  dir?: "up" | "left" | "right" | "none";
  style?: CSSProperties;
}) {
  const { ref, inView } = useInView<HTMLElement>();
  const Tag = as as ElementType;
  return createElement(
    Tag,
    {
      ref,
      className: cn(
        "reveal",
        dir === "left" && "from-left",
        dir === "right" && "from-right",
        dir === "none" && "from-none",
        inView && "is-in",
        className
      ),
      style: {
        ...style,
        transitionDelay: delay ? `${delay}ms` : undefined,
      },
    },
    children
  );
}

/* Eased count-up number */
export function CountUp({
  to,
  duration = 1700,
  delay = 0,
  className,
  format,
}: {
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
  format?: (n: number) => string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }
    let raf = 0;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t + delay;
      const p = Math.min(Math.max((t - start) / duration, 0), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, delay, reduced]);

  const fmt = format ?? ((n: number) => n.toLocaleString("en-US"));
  return (
    <span ref={ref} className={className}>
      {fmt(value)}
    </span>
  );
}
