"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { ArrowUpRight, ArrowRight, Plus } from "lucide-react";
import { PROJECTS, ProjectData } from "@/data/portfolioData";
import { ProjectDialog } from "./ProjectDialog";

function ProjectImage({ project, featured = false }: { project: ProjectData; featured?: boolean }) {
  return (
    <div className={`project-stage ${featured ? "featured-stage" : "index-stage"}`}>
      <div className="stage-registration meta" aria-hidden="true">
        <span>MB / {featured ? "01" : `0${PROJECTS.indexOf(project) + 1}`}</span>
        <Plus size={18} />
      </div>
      <div className="browser-frame">
        <div className="browser-bar">
          <span className="browser-dots">
            <i />
            <i />
            <i />
          </span>
          <span>{project.shortTitle} / Interface overview</span>
          <span>↗</span>
        </div>
        <Image
          src={project.image}
          alt={`${project.shortTitle} dashboard interface`}
          width={project.imageWidth}
          height={project.imageHeight}
          sizes={featured ? "(max-width: 800px) 90vw, 65vw" : "(max-width: 800px) 90vw, 55vw"}
        />
      </div>
      <div className="stage-bottom meta">
        <span>{project.category}</span>
        <span className="stage-open">
          View project <ArrowUpRight size={15} />
        </span>
      </div>
    </div>
  );
}

export function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [preview, setPreview] = useState<ProjectData | null>(null);
  const closePreview = useCallback(() => setPreview(null), []);
  const flagship = PROJECTS[0];
  const selected = PROJECTS[activeIndex];

  return (
    <section className="selected-work shell" id="projects" aria-labelledby="work-title">
      <div className="section-heading">
        <div className="section-label meta">
          <span className="accent-text">02 /</span> Selected work
        </div>
        <h2 id="work-title">
          Ideas, put to work<span className="accent-text">.</span>
        </h2>
        <span className="meta section-count">
          Index ({String(PROJECTS.length).padStart(2, "0")})
        </span>
      </div>
      <article className="flagship-project">
        <div className="flagship-copy">
          <div className="meta project-kicker">
            <span className="status-dot" />
            Deployed at ISU–Ilagan
          </div>
          <span className="project-number">01</span>
          <h3>{flagship.shortTitle}</h3>
          <p className="project-summary">{flagship.summary}</p>
          <p className="project-description">
            An admissions platform that brings examination, scoring, and enrollment into one
            connected system.
          </p>
          <div className="project-impact">
            <strong>
              3,700<span>+</span>
            </strong>
            <span>
              examinees processed
              <br />
              in campus operations
            </span>
          </div>
          <ul className="technology-list">
            {flagship.tags.slice(0, 4).map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <button className="text-link" onClick={() => setPreview(flagship)}>
            Inside the project <ArrowUpRight size={19} />
          </button>
        </div>
        <button
          className="project-visual-button"
          aria-label="View CollegeBound project details"
          onClick={() => setPreview(flagship)}
        >
          <ProjectImage project={flagship} featured />
        </button>
      </article>
      <div className="project-index">
        <div className="index-list">
          <div className="index-heading meta">
            <span>More systems. Same attention to detail.</span>
            <span aria-hidden="true">↓</span>
          </div>
          {PROJECTS.slice(1).map((project, index) => (
            <button
              key={project.id}
              className={`index-item ${activeIndex === index + 1 ? "is-selected" : ""}`}
              aria-pressed={activeIndex === index + 1}
              aria-controls="selected-project-preview"
              onClick={() => setActiveIndex(index + 1)}
            >
              <span className="meta index-number">0{index + 2}</span>
              <span>
                <span className="index-project-name">{project.shortTitle}</span>
                <span className="index-category">{project.category}</span>
              </span>
              <ArrowUpRight size={23} />
            </button>
          ))}
          <p className="index-instruction">Select a project to explore the details.</p>
        </div>
        <article
          className="index-preview"
          id="selected-project-preview"
          aria-live="polite"
          aria-atomic="true"
        >
          <div key={selected.id} className="preview-content">
            <button
              className="project-visual-button"
              onClick={() => setPreview(selected)}
              aria-label={`View ${selected.shortTitle} project details`}
            >
              <ProjectImage project={selected} />
            </button>
            <div className="preview-caption">
              <div>
                <h3>{selected.summary}</h3>
                <p>{selected.description}</p>
              </div>
              <button
                className="round-arrow"
                onClick={() => setPreview(selected)}
                aria-label={`Read about ${selected.shortTitle}`}
              >
                <ArrowRight size={22} />
              </button>
            </div>
          </div>
        </article>
      </div>
      <ProjectDialog project={preview} onClose={closePreview} />
    </section>
  );
}
