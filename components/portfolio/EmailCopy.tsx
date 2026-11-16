"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

/** The email link with a copy button and a status line under it. */
export function EmailCopy({ email }: { email: string }) {
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
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyState("idle"), 3500);
  }

  return (
    <>
      <div className="email-row">
        <a className="contact-value" href={`mailto:${email}`}>
          {email}
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
      <span className="copy-feedback" role="status">
        {copyState === "copied"
          ? "Email copied."
          : copyState === "failed"
            ? "Select the email address to copy it manually."
            : ""}
      </span>
    </>
  );
}
