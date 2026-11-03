import type { CSSProperties } from "react";
import { Bot, Database, Sparkles } from "lucide-react";
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

type BrandMark = Pick<SimpleIcon, "hex" | "path"> & { fillRule?: "evenodd" };

// Simple Icons no longer carries OpenAI, so this mark (the one ChatGPT uses) comes from
// LobeHub Icons: @lobehub/icons-static-svg 1.102.0, MIT licensed, (c) LobeHub.
const OPENAI: BrandMark = {
  hex: "000000",
  fillRule: "evenodd",
  path: "M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z",
};

// Brand marks come from Simple Icons (CC0) unless noted above. Practices get a Lucide glyph
// instead. Names must match the strings in the data file.
const BRAND_MARKS: Record<string, BrandMark> = {
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
  ChatGPT: OPENAI,
};

const GLYPHS: Record<string, LucideIcon> = {
  SQL: Database,
  "Agentic Coding": Bot,
  "AI-Assisted Development": Sparkles,
};

// Black marks (Next.js, GitHub, Vercel, Cursor, OpenAI) disappear on dark surfaces, so the
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
        <path d={mark.path} fillRule={mark.fillRule} />
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
