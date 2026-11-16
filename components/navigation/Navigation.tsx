"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Mark } from "@/components/portfolio/Mark";

const links = [
  { id: "about", label: "About" },
  { id: "ai", label: "AI" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

// The two themes are two copies of the same form.
const copies = [
  { theme: "light", label: "Original" },
  { theme: "dark", label: "Blueprint" },
];

export function Navigation() {
  const [active, setActive] = useState("");
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-10% 0px -55% 0px" },
    );
    ["top", ...links.map((link) => link.id)].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="tabs">
      <div className="tabs-inner">
        <a href="#top" className="brand" aria-label="Mico Balmaceda, back to top">
          <Mark />
          <span>
            mico<span className="brand-dot">.</span>
          </span>
        </a>
        <nav className="tab-list" aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "tab is-active" : "tab"}
              aria-current={active === link.id ? "location" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="copy-switch" role="radiogroup" aria-label="Copy of the form">
          <span className="copy-label" aria-hidden="true">
            Copy
          </span>
          {copies.map((copy) => (
            <button
              key={copy.theme}
              type="button"
              role="radio"
              className="copy-option"
              aria-checked={mounted && resolvedTheme === copy.theme}
              onClick={() => setTheme(copy.theme)}
            >
              <span className="radio" aria-hidden="true" />
              {copy.label}
            </button>
          ))}
        </div>
        <span className="scroll-progress" aria-hidden="true" />
      </div>
    </header>
  );
}
