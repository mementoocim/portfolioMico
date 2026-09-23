import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { EXPERIENCE, PERSONAL, SKILLS } from "@/data/portfolioData";
import { Mark } from "./Mark";

export function Profile() {
  return (
    <section id="about" className="profile-section" aria-labelledby="profile-title">
      <div className="shell">
        <div className="profile-heading">
          <span className="section-label meta">
            <span>02 /</span> The person behind the systems
          </span>
          <Mark />
        </div>
        <div className="profile-intro">
          <div className="portrait-column">
            <div className="portrait-frame">
              <Image
                src="/images/profile/mico.png"
                alt="Mico Balmaceda"
                width={640}
                height={640}
                sizes="(max-width: 600px) 65vw, 330px"
              />
              <span className="portrait-corner" aria-hidden="true">
                <Plus size={24} />
              </span>
            </div>
            <div className="portrait-caption meta">
              <span>Mico Balmaceda</span>
              <span>PH ↗</span>
            </div>
            <p className="portrait-note">
              A developer with a systems mindset
              <br />
              and an eye for the details.
            </p>
          </div>
          <div className="profile-statement">
            <h2 id="profile-title">
              The details matter.
              <br />
              <span>So does the</span>
              <br />
              <em>bigger picture.</em>
            </h2>
            <div className="bio-columns">
              <p>
                BS Information Technology graduate with hands-on experience supporting users,
                resolving software and web application issues, documenting workflows, and
                maintaining accurate digital records. Developed and deployed the CollegeBound
                Admission Test System and assisted staff during live operations.
              </p>
              <p>
                Currently supports data and office workflows at DTI–Isabela. Adaptable, patient,
                and quick to learn new software, with communication and a service-oriented
                approach.
              </p>
            </div>
            <a className="text-link" href="#contact">
              Open to my next chapter <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="capabilities" id="skills">
          <div className="subsection-heading">
            <span className="meta">The toolkit</span>
            <h3>From interface to infrastructure.</h3>
          </div>
          <div className="capability-list">
            {SKILLS.map((category, index) => (
              <div className="capability-row" key={category.title}>
                <span className="meta">0{index + 1}</span>
                <h4>{category.title}</h4>
                <ul>
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="experience-records" id="experience">
          <div className="subsection-heading">
            <span className="meta">The journey</span>
            <h3>Learning by building.</h3>
          </div>
          <div className="records-list">
            {EXPERIENCE.map((job, index) => (
              <details className="experience-record" key={job.role} open={index === 0}>
                <summary>
                  <span className="record-date meta">{job.period}</span>
                  <span className="record-heading">
                    <strong>{job.role}</strong>
                    <span>{job.organization}</span>
                  </span>
                  <Plus size={20} className="details-plus" />
                </summary>
                <ul className="experience-bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </details>
            ))}
            <div className="education-record">
              <span className="record-date meta">{PERSONAL.education.period}</span>
              <div className="record-heading">
                <strong>{PERSONAL.education.degree}</strong>
                <span>{PERSONAL.education.school}</span>
              </div>
              <span className="meta record-type">Education</span>
            </div>
            <div className="education-record">
              <span className="record-date meta">{PERSONAL.certification.date}</span>
              <div className="record-heading">
                <strong>{PERSONAL.certification.title}</strong>
                <span>{PERSONAL.certification.issuer}</span>
              </div>
              <span className="meta record-type">Certification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
