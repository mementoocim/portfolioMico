/** Two interlocking paths: the portfolio's structure-to-connection identity. */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path d="M12 76V25h17l21 27 21-27h17v51H71V51L50 77 29 51v25H12Z" fill="currentColor" />
      <path d="M12 12h76M12 88h76" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
