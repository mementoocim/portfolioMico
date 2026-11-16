import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { PERSONAL } from "@/data/portfolioData";
import { Comb, Stamp } from "./FormParts";

const [firstName, ...otherNames] = PERSONAL.name.split(" ");
const surname = otherNames.join(" ");

export function Introduction() {
  return (
    <section className="form-head" id="top" aria-labelledby="hero-title">
      <h1 id="hero-title" className="sr-only">
        {PERSONAL.name}, systems and user support
      </h1>

      <div className="masthead">
        <p className="form-no">
          MB Form No. 1 <span>Revised November 2026</span>
        </p>
        <p className="serial" aria-hidden="true">
          <span>No.</span>003700
        </p>
        <div className="form-title-wrap">
          <p className="form-title">
            <span>Portfolio</span> <span>Data Sheet</span>
          </p>
        </div>
        <div className="form-lines">
          <p className="form-sub">For systems and user support positions</p>
          <p className="form-note">
            Print legibly. Tick appropriate boxes. Indicate N/A if not applicable.
          </p>
        </div>
        <figure className="photo-box">
          <Image
            src={PERSONAL.photo}
            alt={`ID photo of ${PERSONAL.name}`}
            width={480}
            height={480}
            priority
            sizes="(max-width: 760px) 96px, 150px"
          />
          <figcaption>2 x 2 ID photo</figcaption>
        </figure>
        <Stamp className="hero-stamp">Open to work</Stamp>
      </div>

      <h2 className="bar">
        <span>I.</span> Personal information
      </h2>
      <div className="grid">
        <div className="field span-7">
          <span className="label">
            <b className="no" /> Surname
          </span>
          <Comb text={surname} cells={12} />
        </div>
        <div className="field span-5">
          <span className="label">
            <b className="no" /> First name
          </span>
          <Comb text={firstName} cells={8} />
        </div>
        <div className="field span-12 words-field">
          <span className="label">
            <b className="no" /> Describe yourself in six words
          </span>
          <div className="words-wrap">
            <p className="hand hero-words">
              <span>Patient with people.</span> <span>Precise with systems.</span>
            </p>
          </div>
        </div>
        <div className="field span-3">
          <span className="label">
            <b className="no" /> Highest education
          </span>
          <p className="typed typed-lg">BS Information Technology, 2026</p>
        </div>
        <div className="field span-5">
          <span className="label">
            <b className="no" /> What you do, in one sentence
          </span>
          <p className="typed">
            IT graduate who troubleshoots software issues, tests and documents workflows, and helps
            users get things done.
          </p>
        </div>
        <div className="field span-4">
          <span className="label">
            <b className="no" /> To reach the applicant
          </span>
          <div className="actions">
            <a className="button button-solid" href={`mailto:${PERSONAL.email}`}>
              <Mail size={16} aria-hidden="true" />
              Email me
            </a>
            <a className="button" href="#projects">
              See my work
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
