"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, Check, Copy, Mail } from "lucide-react";
import { PERSONAL } from "@/data/portfolioData";
import { Mark } from "./Mark";

export function Contact() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(PERSONAL.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyState("idle"), 3500);
  }

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
            <span className="write">{PERSONAL.name}</span>
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
              <div className="email-row">
                <a className="contact-value" href={`mailto:${PERSONAL.email}`}>
                  {PERSONAL.email}
                </a>
                <button
                  type="button"
                  className="copy-button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  {copyState === "copied" ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
            <div className="contact-item">
              <span className="label">Mobile</span>
              <a className="contact-value" href={`tel:${PERSONAL.phone.replace(/[^0-9+]/g, "")}`}>
                {PERSONAL.phone}
              </a>
            </div>
            <span className="copy-feedback" role="status">
              {copyState === "copied"
                ? "Email copied."
                : copyState === "failed"
                  ? "Select the email address to copy it manually."
                  : ""}
            </span>
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
