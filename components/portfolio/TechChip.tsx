import type { CSSProperties } from "react";
import { Bot, Database, MessagesSquare, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  siClaude,
  siCss,
  siCursor,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siXampp,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

// Brand marks come from Simple Icons (CC0). Practices, and products Simple Icons does not
// carry (OpenAI), get a Lucide glyph instead. Names must match the strings in the data file.
const BRAND_MARKS: Record<string, SimpleIcon> = {
  HTML5: siHtml5,
  CSS: siCss,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  React: siReact,
  "Next.js": siNextdotjs,
  "Tailwind CSS": siTailwindcss,
  PHP: siPhp,
  "Node.js": siNodedotjs,
  MySQL: siMysql,
  Supabase: siSupabase,
  Git: siGit,
  GitHub: siGithub,
  XAMPP: siXampp,
  Vercel: siVercel,
  Claude: siClaude,
  "Claude Code": siClaude,
  "Cursor AI": siCursor,
};

const GLYPHS: Record<string, LucideIcon> = {
  SQL: Database,
  ChatGPT: MessagesSquare,
  "Agentic Coding": Bot,
  "AI-Assisted Development": Sparkles,
};

// Black marks (Next.js, GitHub, Vercel, Cursor) disappear on dark surfaces, so the
// stylesheet swaps them to the ink color there.
function isNearBlack(hex: string) {
  const [r, g, b] = [0, 2, 4].map((start) => parseInt(hex.slice(start, start + 2), 16));
  return r + g + b < 120;
}

/** Brand color and dark-surface flag for an element that wraps a TechLogo. */
export function brandAttributes(name: string, style?: CSSProperties) {
  const mark = BRAND_MARKS[name];
  return {
    style: { ...style, ...(mark && { "--brand": `#${mark.hex}` }) } as CSSProperties,
    "data-near-black": mark && isNearBlack(mark.hex) ? "" : undefined,
  };
}

export function TechLogo({ name }: { name: string }) {
  const mark = BRAND_MARKS[name];
  if (mark) {
    return (
      <svg className="tech-mark" viewBox="0 0 24 24" aria-hidden="true">
        <path d={mark.path} />
      </svg>
    );
  }
  const Glyph = GLYPHS[name];
  return Glyph ? <Glyph className="tech-glyph" aria-hidden="true" /> : null;
}

export function TechChip({ name, index }: { name: string; index: number }) {
  return (
    <li className="tech-chip" {...brandAttributes(name, { "--i": index } as CSSProperties)}>
      <TechLogo name={name} />
      {name}
    </li>
  );
}
