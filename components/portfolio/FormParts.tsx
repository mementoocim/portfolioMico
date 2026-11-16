import type { CSSProperties, ReactNode } from "react";
import { Paperclip } from "lucide-react";

/** Inline custom properties, such as the stagger index `--i`. */
export function cssVars(vars: Record<string, string | number>) {
  return vars as CSSProperties;
}

/** A printed tick box with a pen tick that overshoots it. */
export function TickBox() {
  return (
    <span className="box" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M3 12.5 8.5 19 22 2.5" pathLength={1} />
      </svg>
    </span>
  );
}

/** One handwritten capital per box, like a form filled in by hand. Decorative: pair it
    with real text for screen readers. */
export function Comb({ text, cells }: { text: string; cells: number }) {
  const letters = [...text.toUpperCase()];
  return (
    <span className="comb-wrap" aria-hidden="true">
      <span className="comb" style={cssVars({ "--cells": cells })}>
        {Array.from({ length: cells }, (_, index) => (
          <span key={index} style={cssVars({ "--i": index })}>
            {letters[index] ?? ""}
          </span>
        ))}
      </span>
    </span>
  );
}

export function Stamp({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`stamp ${className}`}>
      <span>{children}</span>
    </span>
  );
}

export function PaperClip() {
  return <Paperclip className="paper-clip" strokeWidth={1.6} aria-hidden="true" />;
}
