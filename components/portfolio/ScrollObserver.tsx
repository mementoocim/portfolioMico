"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = ".reveal";

/** Marks `.reveal` elements as they scroll into view. The stylesheet only hides anything
    once this has run (`.js-reveal`), so the page is complete without it. */
export function ScrollObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    root.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);

  return null;
}
