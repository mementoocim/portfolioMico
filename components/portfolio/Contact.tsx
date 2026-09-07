"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy } from "lucide-react";
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
    <footer id="contact" className="contact-section">
      <div className="shell">
        <div className="contact-top">
          <span className="section-label meta">03 / What’s next</span>
          <span className="meta">
            <span className="status-dot" />
            Open to entry-level opportunities
          </span>
        </div>
        <div className="contact-composition">
          <h2>
            Good things
            <br />
            start with <em>hello.</em>
          </h2>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="contact-arrow"
            aria-label="Email Mico Balmaceda"
          >
            <ArrowUpRight strokeWidth={1} />
          </a>
        </div>
        <div className="contact-details">
          <p>
            Have a system to build, a problem to untangle,
            <br className="desktop-break" /> or a place on your team? I’d love to hear about it.
          </p>
          <div className="contact-links">
            <div className="email-row">
              <a href={`mailto:${PERSONAL.email}`}>{PERSONAL.email}</a>
              <button className="copy-button" onClick={copyEmail} aria-label="Copy email address">
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
        <div className="footer-bottom">
          <a href="#top" className="footer-brand" aria-label="Back to top">
            <Mark />
            <span>
              Made with intention.
              <br />© {new Date().getFullYear()} {PERSONAL.name}
            </span>
          </a>
          <span className="footer-location">{PERSONAL.location}</span>
          <a href="#top" className="back-top">
            Back to top
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
