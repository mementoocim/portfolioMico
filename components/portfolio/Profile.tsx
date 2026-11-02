import { ArrowUpRight } from "lucide-react";
import { EXPERIENCE, PERSONAL } from "@/data/portfolioData";

export function Profile() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="about-grid shell">
        <div className="about-intro reveal-on-scroll">
          <h2 id="about-title" className="section-title">
            The details matter. So does the human experience.
          </h2>
          <div className="about-bio">
            <p>
              BS Information Technology graduate (Major in Web and Mobile Application Development,
              Graduated 2026) with hands-on experience supporting users, resolving software and web
              application issues, documenting workflows, and maintaining accurate digital records.
              Developed and deployed the CollegeBound Admission Test System for actual school
              operations and assisted staff during live operations.
            </p>
            <p>
              Adaptable, patient, and quick to learn new software, combining active listening,
              problem solving, and attention to detail with foundational skills in PHP, MySQL, and
              web development.
            </p>
          </div>
        </div>

        <div className="about-timeline reveal-on-scroll" id="experience">
          <h3 className="timeline-heading">Experience and credentials</h3>
          <ol className="timeline">
            {EXPERIENCE.map((job) => (
              <li className="timeline-item" key={job.role}>
                <p className="timeline-date">{job.period}</p>
                <h4>{job.role}</h4>
                <p className="timeline-org">{job.organization}</p>
                <ul className="timeline-points">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
            <li className="timeline-item">
              <p className="timeline-date">{PERSONAL.education.period}</p>
              <h4>{PERSONAL.education.degree}</h4>
              <p className="timeline-org">{PERSONAL.education.school}</p>
            </li>
            <li className="timeline-item">
              <p className="timeline-date">{PERSONAL.certification.date}</p>
              <h4>{PERSONAL.certification.title}</h4>
              <p className="timeline-org">
                {PERSONAL.certification.issuer}. Code <code>{PERSONAL.certification.code}</code>
              </p>
              <a
                className="text-link"
                href={PERSONAL.certification.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View certificate
                <ArrowUpRight size={16} />
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
