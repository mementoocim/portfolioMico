"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { Mark } from "@/components/portfolio/Mark";
import { PERSONAL } from "@/data/portfolioData";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
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
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <a href="#top" className="brand" aria-label="Mico Balmaceda, back to top">
          <Mark />
          <span>
            mico<span className="brand-dot">.</span>
          </span>
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "is-active" : undefined}
              aria-current={active === link.id ? "location" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a
            href={PERSONAL.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary button-small"
          >
            Resume
            <ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            className="icon-button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label={
              mounted && resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"
            }
          >
            {mounted && resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
