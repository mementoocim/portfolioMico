"use client";

import { useEffect, useRef } from "react";

const DURATION_MS = 1600;

function format(value: number, suffix: string) {
  return `${Math.round(value).toLocaleString("en-US")}${suffix}`;
}

/**
 * Counts up to `value` the first time the number scrolls into view. The server renders the
 * final number, so it is right without JavaScript and with reduced motion.
 */
export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    element.textContent = format(0, suffix);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / DURATION_MS);
          // Ease out so the last digits settle instead of snapping.
          element.textContent = format(value * (1 - (1 - progress) ** 3), suffix);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      element.textContent = format(value, suffix);
    };
  }, [value, suffix]);

  return <span ref={ref}>{format(value, suffix)}</span>;
}
