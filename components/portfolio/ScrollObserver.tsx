"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = ".reveal-on-scroll, .reveal-stagger, .reveal-chips";

export function ScrollObserver() {
  useEffect(() => {
    // Check if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    const elements = document.querySelectorAll(REVEAL_SELECTOR);
    if (!elements.length) return;

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
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
