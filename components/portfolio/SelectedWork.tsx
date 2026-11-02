"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, ProjectData } from "@/data/portfolioData";
import { ProjectDialog } from "./ProjectDialog";

export function SelectedWork() {
  const [preview, setPreview] = useState<ProjectData | null>(null);
  const closePreview = useCallback(() => setPreview(null), []);
  const [flagship, ...others] = PROJECTS;

  return (
    <section className="section work" id="projects" aria-labelledby="work-title">
      <div className="shell">
        <h2 id="work-title" className="section-title reveal-on-scroll">
          Systems I&apos;ve built
        </h2>

        <article className="case-feature reveal-on-scroll">
          <div className="case-feature-body">
            <div>
              <p className="case-label">Deployed at ISU-Ilagan</p>
              <h3>{flagship.shortTitle}</h3>
              <p className="case-summary">{flagship.summary}</p>
            </div>
            <div>
              <p className="case-description">{flagship.description}</p>
              <ul className="tag-list" aria-label="Technologies">
                {flagship.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <button
                type="button"
                className="text-link case-open"
                onClick={() => setPreview(flagship)}
                aria-label={`View ${flagship.shortTitle} project details`}
              >
                Project details
                <ArrowUpRight size={17} />
              </button>
            </div>
            <div className="case-stat">
              <strong>3,700+</strong>
              <span>examinees processed in campus operations</span>
            </div>
          </div>
          <div className="case-media">
            <Image
              src={flagship.image}
              alt={`${flagship.shortTitle} dashboard interface`}
              width={flagship.imageWidth}
              height={flagship.imageHeight}
              sizes="(max-width: 860px) 92vw, 1240px"
            />
          </div>
        </article>

        <div className="case-grid reveal-stagger">
          {others.map((project) => (
            <article className="case-card" key={project.id}>
              <div className="case-media">
                <Image
                  src={project.image}
                  alt={`${project.shortTitle} dashboard interface`}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  sizes="(max-width: 860px) 92vw, 620px"
                />
              </div>
              <div className="case-card-body">
                <p className="case-category">{project.category}</p>
                <h3>{project.shortTitle}</h3>
                <p className="case-summary">{project.summary}</p>
                <ul className="tag-list" aria-label="Technologies">
                  {project.tags.slice(0, 4).map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="text-link case-open"
                  onClick={() => setPreview(project)}
                  aria-label={`View ${project.shortTitle} project details`}
                >
                  Project details
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <ProjectDialog project={preview} onClose={closePreview} />
    </section>
  );
}
