import { ArrowDown, Mail } from "lucide-react";
import { IdBadge } from "./IdBadge";
import { PERSONAL } from "@/data/portfolioData";

export function Introduction() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid shell">
        <div className="hero-copy">
          <p className="hero-greeting">Hi, I&apos;m {PERSONAL.name}.</p>
          <h1 id="hero-title">
            <span>
              Patient with <span className="marker">people</span>.
            </span>
            <span>Precise with systems.</span>
          </h1>
          <p className="hero-sub">
            IT graduate who troubleshoots software issues, tests and documents workflows, and helps
            users get things done.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${PERSONAL.email}`}>
              <Mail size={18} />
              Email me
            </a>
            <a className="button button-secondary" href="#projects">
              See my work
              <ArrowDown size={17} />
            </a>
          </div>
        </div>
        <div className="hero-badge">
          <IdBadge />
        </div>
      </div>
    </section>
  );
}
