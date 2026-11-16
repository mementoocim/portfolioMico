import { ArrowUpRight } from "lucide-react";
import { EXPERIENCE, PERSONAL } from "@/data/portfolioData";

export function Profile() {
  return (
    <>
      <section id="about" aria-labelledby="about-title">
        <h2 className="bar" id="about-title">
          <span>II.</span> Applicant profile
        </h2>
        <div className="grid">
          <div className="field span-7 rows-3">
            <span className="label">
              <b>8.</b> Profile summary
            </span>
            <div className="typed prose">
              <p>
                BS Information Technology graduate (Major in Web and Mobile Application Development,
                Graduated 2026) with hands-on experience supporting users, resolving software and
                web application issues, documenting workflows, and maintaining accurate digital
                records. Developed and deployed the CollegeBound Admission Test System for actual
                school operations and assisted staff during live operations.
              </p>
              <p>
                Adaptable, patient, and quick to learn new software, combining active listening,
                problem solving, and attention to detail with foundational skills in PHP, MySQL, and
                web development.
              </p>
            </div>
          </div>
          <div className="field span-5">
            <span className="label">
              <b>9.</b> Education
            </span>
            <p className="typed">
              <strong>{PERSONAL.education.degree}</strong>
            </p>
            <p className="typed typed-sm">
              {PERSONAL.education.school}. {PERSONAL.education.period}.
            </p>
          </div>
          <div className="field span-5">
            <span className="label">
              <b>10.</b> Certification
            </span>
            <p className="typed">
              <strong>{PERSONAL.certification.title}</strong>
            </p>
            <p className="typed typed-sm">
              {PERSONAL.certification.issuer}. {PERSONAL.certification.date}. Code{" "}
              <code>{PERSONAL.certification.code}</code>
            </p>
            <a
              className="text-link"
              href={PERSONAL.certification.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View certificate
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div className="field span-5">
            <span className="label">
              <b>11.</b> Home address
            </span>
            <p className="typed">{PERSONAL.location}</p>
          </div>
        </div>
      </section>

      <section id="experience" aria-labelledby="experience-title">
        <h2 className="bar" id="experience-title">
          <span>III.</span> Work experience <small>(Start from the most recent)</small>
        </h2>
        <table className="sheet-table">
          <thead>
            <tr>
              <th scope="col">
                <b>12.</b> Inclusive dates
              </th>
              <th scope="col">
                <b>13.</b> Position title
              </th>
              <th scope="col">
                <b>14.</b> Office
              </th>
              <th scope="col">
                <b>15.</b> Duties and accomplishments
              </th>
            </tr>
          </thead>
          <tbody>
            {EXPERIENCE.map((job) => (
              <tr key={job.role}>
                <td className="typed" data-label="Inclusive dates">
                  {job.period}
                </td>
                <td className="typed" data-label="Position title">
                  <strong>{job.role}</strong>
                </td>
                <td className="typed" data-label="Office">
                  {job.organization}
                </td>
                <td className="typed" data-label="Duties and accomplishments">
                  <ul className="typed-list">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
            <tr className="open-row">
              <td colSpan={4}>
                <p className="hand reveal">
                  <span className="write">Reserved for my next employer.</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
