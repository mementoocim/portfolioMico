import Image from "next/image";
import { ArrowDown, ArrowUpRight, FileText, Plus } from "lucide-react";
import { Mark } from "./Mark";
import { PERSONAL } from "@/data/portfolioData";

export function Introduction() {
  return (
    <section className="introduction shell" id="top" aria-labelledby="intro-title">
      <div className="intro-eyebrow meta">
        <span>People-first support. Technical foundation.</span>
        <span>Portfolio / 2026</span>
      </div>

      <div className="hero-grid">
        <div className="hero-narrative">
          <div className="headline-composition">
            <h1 id="intro-title">
              <span>Built with logic.</span>
              <span className="headline-second">
                Made for <em>people.</em>
              </span>
            </h1>
            <div className="identity-stamp" aria-hidden="true">
              <Mark />
              <span className="meta">Support × Systems</span>
            </div>
          </div>

          <div className="hero-identity">
            <span className="small-cross" aria-hidden="true">
              +
            </span>
            <div>
              <p className="hero-name">{PERSONAL.name}</p>
              <span className="hero-role">IT Graduate | Systems & User Support</span>
            </div>
          </div>

          <p className="hero-description">
            BS Information Technology graduate bridging technical systems and user support.
            Experienced in troubleshooting, resolving software issues, testing workflows, and
            assisting users with patience and clear communication.
          </p>

          <div className="hero-credentials meta">
            <span className="credential-pill">
              <strong>BS IT '26</strong> ISU–Ilagan
            </span>
            <span className="credential-pill">
              <strong>CollegeBound</strong> 3,700+ Users
            </span>
            <span className="credential-pill">
              <strong>DTI Isabela</strong> GIP Intern
            </span>
          </div>

          <div className="hero-actions">
            <a
              href={PERSONAL.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-resume-btn"
              aria-label="View Resume (PDF)"
            >
              <FileText size={15} />
              <span>View Resume (PDF)</span>
              <ArrowUpRight size={14} />
            </a>
            <a href="#about" className="hero-explore-btn">
              <span>Explore profile</span>
              <ArrowDown size={15} />
            </a>
            <a href="#projects" className="hero-work-link">
              <span>Selected work</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="hero-portrait-card">
          <div className="hero-portrait-frame">
            <Image
              src="/images/profile/mico.png"
              alt="Mico Balmaceda"
              width={640}
              height={720}
              priority
              sizes="(max-width: 768px) 85vw, (max-width: 1200px) 340px, 380px"
              className="hero-portrait-img"
            />
            <span className="portrait-corner" aria-hidden="true">
              <Plus size={22} />
            </span>
          </div>
          <div className="hero-portrait-caption meta">
            <span>{PERSONAL.name}</span>
            <span>Isabela, PH ↗</span>
          </div>
          <div className="hero-status meta">
            <span className="status-dot" />
            <span>Open to Systems & User Support roles</span>
          </div>
          <p className="hero-portrait-note">
            An IT graduate with a support mindset and an eye for user detail.
          </p>
        </div>
      </div>

      <div className="intro-footnote meta">
        <span>Based in Isabela, Philippines</span>
        <span>
          User-centered support. Reliable systems.
          <ArrowDown size={14} />
        </span>
      </div>
    </section>
  );
}
