import { ArrowUp, Mail } from "lucide-react";
import { PERSONAL } from "@/data/portfolioData";
import { EmailCopy } from "./EmailCopy";
import { Mark } from "./Mark";
import { Signature } from "./Signature";

export function Contact() {
  return (
    <footer id="contact" aria-labelledby="contact-title">
      <h2 className="bar" id="contact-title">
        <span>VIII.</span> Contact and signature
      </h2>
      <div className="grid">
        <div className="field span-7">
          <span className="label">
            <b className="no" /> Anything else we should know?
          </span>
          <p className="hand answer reveal">
            <span className="write">Good things start with hello.</span>
          </p>
          <p className="typed">
            Looking for someone patient, tech-savvy, and attentive to user needs? Whether it’s user
            support, customer experience, or system workflows, I’d love to connect.
          </p>
        </div>
        <div className="field span-5 sign-cell">
          <span className="label">
            <b className="no" /> Signature
          </span>
          <p className="signature reveal" aria-hidden="true">
            <span className="write">
              <Signature />
            </span>
          </p>
          <p className="sign-line">{PERSONAL.name}</p>
          <p className="sign-note">Signature over printed name</p>
        </div>
        <div className="field span-12 office-use">
          <span className="label">For employer use only</span>
          <div className="office-grid">
            <a className="button button-solid" href={`mailto:${PERSONAL.email}`}>
              <Mail size={16} aria-hidden="true" />
              Email me
            </a>
            <div className="contact-item">
              <span className="label">Email</span>
              <EmailCopy email={PERSONAL.email} />
            </div>
            <div className="contact-item">
              <span className="label">Mobile</span>
              <a className="contact-value" href={`tel:${PERSONAL.phone.replace(/[^0-9+]/g, "")}`}>
                {PERSONAL.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="nothing-follows" aria-hidden="true">
        x x x &nbsp;Nothing follows&nbsp; x x x
      </p>
      <div className="colophon">
        <a href="#top" className="brand" aria-label="Back to top">
          <Mark />
          <span>
            mico<span className="brand-dot">.</span>
          </span>
        </a>
        <p>
          MB Form No. 1 (Revised 2026). © {new Date().getFullYear()} {PERSONAL.name},{" "}
          {PERSONAL.location}
        </p>
        <a href="#top" className="footer-top">
          Back to top
          <ArrowUp size={15} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
