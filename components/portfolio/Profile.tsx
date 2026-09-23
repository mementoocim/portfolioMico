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
            <span>01 /</span> The person behind the support & systems
          </span>
          <Mark />
        </div>
        <div className="profile-intro">
          <div className="credentials-column">
            <div className="credentials-card">
              <div className="credentials-card-header">
                <div className="credentials-avatar">
                  <Image
                    src="/images/profile/mico.png"
                    alt="Mico Balmaceda"
                    width={80}
                    height={80}
                    sizes="48px"
                  />
                </div>
                <div>
                  <span className="credentials-name">{PERSONAL.name}</span>
                  <span className="credentials-title meta">IT Graduate · Systems & Support</span>
                </div>
              </div>

              <div className="credentials-divider" />

              <div className="credentials-list">
                <div className="credential-item">
                  <span className="meta">Education</span>
                  <p>{PERSONAL.education.degree}</p>
                  <span className="credential-sub">
                    {PERSONAL.education.school} · {PERSONAL.education.period}
                  </span>
                </div>

                <div className="credential-item">
                  <span className="meta">Certification</span>
                  <p>{PERSONAL.certification.title}</p>
                  <span className="credential-sub">{PERSONAL.certification.issuer}</span>
                </div>

                <div className="credential-item">
                  <span className="meta">Hands-on Experience</span>
                  <p>Government Intern (GIP) & Operations Support</p>
                  <span className="credential-sub">DTI Isabela BDD · CollegeBound Deployment</span>
                </div>

                <div className="credential-item">
                  <span className="meta">Location & Availability</span>
                  <p>{PERSONAL.location}</p>
                  <span className="credential-sub">Open to full-time support & IT roles</span>
                </div>
              </div>

              <div className="credentials-footer meta">
                <span className="status-dot" />
                <span>Available for immediate placement</span>
              </div>
            </div>
            <p className="portrait-note">
              An IT graduate with a support mindset
              <br />
              and an eye for user detail.
            </p>
          </div>
          <div className="profile-statement">
            <h2 id="profile-title">
              The details matter.
              <br />
              <span>So does the</span>
              <br />
              <em>human experience.</em>
            </h2>
            <div className="bio-columns">
              <p>
                BS Information Technology graduate (Major in Web and Mobile Application Development
                — Graduated 2026) with hands-on experience supporting users, resolving software and
                web application issues, documenting workflows, and maintaining accurate digital
                records. Developed and deployed the CollegeBound Admission Test System for actual
                school operations and assisted staff during live operations.
              </p>
              <p>
                Currently supports data and office workflows as a Government Intern (GIP) at the
                Department of Trade and Industry — Isabela Provincial Office (BDD). Adaptable,
                patient, and quick to learn new software, combining active listening, problem
                solving, and attention to detail with foundational skills in PHP, MySQL, and web
                development.
              </p>
            </div>
            <div className="profile-actions">
              <a className="text-link" href="#contact">
                Open to my next chapter <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
        <div className="capabilities" id="skills">
          <div className="subsection-heading">
            <span className="meta">The toolkit</span>
            <h3>From user empathy to technical execution.</h3>
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
            <h3>Experience supporting users and systems.</h3>
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
