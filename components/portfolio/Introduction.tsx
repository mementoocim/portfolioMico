import { ArrowDown, ArrowDownRight, ArrowUpRight, FileText } from "lucide-react";
import { Mark } from "./Mark";
import { PERSONAL } from "@/data/portfolioData";

export function Introduction() {
  return (
    <section className="introduction shell" id="top" aria-labelledby="intro-title">
      <div className="intro-eyebrow meta">
        <span>People-first support. Technical foundation.</span>
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
          <span className="meta">Support × Systems</span>
        </div>
      </div>
      <div className="intro-bottom">
        <div className="intro-identity">
          <span className="small-cross" aria-hidden="true">
            +
          </span>
          <div>
            <p>{PERSONAL.name}</p>
            <span>IT Graduate | Systems & User Support</span>
          </div>
        </div>
        <div className="intro-center">
          <p className="intro-description">
            BS Information Technology graduate bridging technical systems and user support.
            Experienced in troubleshooting, resolving software issues, testing workflows, and
            assisting users with patience and clear communication.
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
          User-centered support. Reliable systems.
          <ArrowDownRight size={14} />
        </span>
      </div>
    </section>
  );
}
