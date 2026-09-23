"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ArrowUpRight, FileText, Moon, Sun } from "lucide-react";
import { Mark } from "@/components/portfolio/Mark";
import { PERSONAL } from "@/data/portfolioData";

const links = [
  { id: "about", label: "About", number: "01" },
  { id: "projects", label: "Work", number: "02" },
  { id: "contact", label: "Contact", number: "03" },
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
      <nav className="navigation shell" aria-label="Main navigation">
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
              className={active === link.id ? "active" : ""}
              aria-current={active === link.id ? "location" : undefined}
            >
              <span className="nav-number">{link.number}</span>
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a
            href={PERSONAL.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn"
            aria-label="View Resume (PDF)"
          >
            <FileText size={13} />
            <span>Resume</span>
          </a>
          <a className="availability" href="#contact">
            <span className="status-dot" />
            Open to opportunities
            <ArrowUpRight size={14} />
          </a>
          <button
            className="theme-toggle"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label={
              mounted && resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"
            }
          >
            {mounted && resolvedTheme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
