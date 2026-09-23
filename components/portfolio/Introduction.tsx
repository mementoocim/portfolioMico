import { ArrowDown, ArrowDownRight, ArrowUpRight, FileText } from "lucide-react";
import { Mark } from "./Mark";
import { PERSONAL } from "@/data/portfolioData";

export function Introduction() {
  return (
    <section className="introduction shell" id="top" aria-labelledby="intro-title">
      <div className="intro-eyebrow meta">
        <span>Independent mind. Connected systems.</span>
        <span>Portfolio / 2026</span>
      </div>
      <div className="headline-composition">
        <h1 id="intro-title">
          <span>Built with logic.</span>
          <span className="headline-second">
            Made for <em>people.</em>
          </span>
        </h1>
        <div className="identity-stamp">
          <Mark />
          <span className="meta">Structure × feeling</span>
        </div>
      </div>
      <div className="intro-bottom">
        <div className="intro-identity">
          <span className="small-cross" aria-hidden="true">
            +
          </span>
          <div>
            <p>{PERSONAL.name}</p>
            <span>Systems & full-stack developer</span>
          </div>
        </div>
        <div className="intro-center">
          <p className="intro-description">
            I turn complex workflows into clear digital experiences. From the database underneath to
            the details you can feel.
          </p>
          <a
            href={PERSONAL.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="intro-resume-link"
          >
            <FileText size={14} />
            <span>View Resume (PDF)</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
        <a href="#projects" className="explore-link">
          <span>Explore selected work</span>
          <span className="round-arrow">
            <ArrowDown size={21} />
          </span>
        </a>
      </div>
      <div className="intro-footnote meta">
        <span>Based in Isabela, Philippines</span>
        <span>
          Thoughtful interfaces. Real-world systems.
          <ArrowDownRight size={14} />
        </span>
      </div>
    </section>
  );
}
