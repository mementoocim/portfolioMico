"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Mail, X } from "lucide-react";
import { PERSONAL, ProjectData } from "@/data/portfolioData";

export function ProjectDialog({
  project,
  onClose,
}: {
  project: ProjectData | null;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const element = dialog.current;
    if (!project || !element) return;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="dialog-inner">
          <div className="dialog-head">
            <p className="dialog-type">{project.type}</p>
            <button
              type="button"
              className="icon-button"
              autoFocus
              onClick={onClose}
              aria-label="Close project details"
            >
              <X size={20} />
            </button>
          </div>
          <div className="dialog-media">
            <Image
              src={project.image}
              alt={`${project.shortTitle} project interface, full preview`}
              width={project.imageWidth}
              height={project.imageHeight}
              sizes="(max-width: 900px) 95vw, 1000px"
            />
          </div>
          <div className="dialog-body">
            <h2 id="project-dialog-title">{project.title}</h2>
            <p>{project.description}</p>
            <ul className="tag-list" aria-label="Project technologies">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <a
              className="button button-primary"
              href={`mailto:${PERSONAL.email}?subject=${encodeURIComponent(`Let's talk about ${project.shortTitle}`)}`}
            >
              <Mail size={18} />
              Email me
            </a>
          </div>
        </div>
      )}
    </dialog>
  );
}
