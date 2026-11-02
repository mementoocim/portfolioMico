"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy, Mail } from "lucide-react";
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
    <footer id="contact" className="contact">
      <div className="shell">
        <div className="contact-panel reveal-on-scroll">
          <div className="contact-copy">
            <h2>Good things start with hello.</h2>
            <p>
              Looking for someone patient, tech-savvy, and attentive to user needs? Whether it’s
              user support, customer experience, or system workflows, I’d love to connect.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-dark" href={`mailto:${PERSONAL.email}`}>
              <Mail size={18} />
              Email me
            </a>
            <div className="contact-lines">
              <div className="email-row">
                <a href={`mailto:${PERSONAL.email}`}>{PERSONAL.email}</a>
                <button
                  type="button"
                  className="copy-button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  {copyState === "copied" ? <Check size={17} /> : <Copy size={17} />}
                </button>
              </div>
              <span className="copy-feedback" role="status">
                {copyState === "copied"
                  ? "Email copied."
                  : copyState === "failed"
                    ? "Select the email address to copy it manually."
                    : ""}
              </span>
              <a className="phone-link" href={`tel:${PERSONAL.phone.replace(/[^0-9+]/g, "")}`}>
                {PERSONAL.phone}
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bar">
          <a href="#top" className="brand" aria-label="Back to top">
            <Mark />
            <span>
              mico<span className="brand-dot">.</span>
            </span>
          </a>
          <p>
            © {new Date().getFullYear()} {PERSONAL.name}, {PERSONAL.location}
          </p>
          <a href="#top" className="footer-top">
            Back to top
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
