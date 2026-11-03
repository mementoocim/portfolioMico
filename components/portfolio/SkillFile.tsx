import type { CSSProperties, ReactNode } from "react";
import { FileText } from "lucide-react";

// Written in the Agent Skills format that Claude Code reads: YAML frontmatter with a name
// and a description, then Markdown instructions.
const SKILL_FILE = `---
name: mico-balmaceda
description: IT graduate for systems and user support. Use when a team needs someone patient with people and precise with systems.
---

# Mico Balmaceda

## When to use
- A user is stuck and needs a calm walkthrough
- A system needs testing, troubleshooting or documentation
- A project needs AI agents and a human who checks their work

## Tools
Claude Code, Cursor AI, ChatGPT, PHP, MySQL, Next.js

## Workflow
1. Listen and reproduce the issue
2. Plan the fix with an agent
3. Build, test and document
4. Review everything before it ships`;

/** Light Markdown highlighting: frontmatter keys, headings and list markers. */
function highlight(line: string, inFrontmatter: boolean): ReactNode {
  if (line === "---") return <span className="md-rule">---</span>;
  const key = inFrontmatter && line.match(/^(\w+):(.*)$/);
  if (key) {
    return (
      <>
        <span className="md-key">{key[1]}:</span>
        <span className="md-value">{key[2]}</span>
      </>
    );
  }
  const heading = line.match(/^(#{1,2}) (.*)$/);
  if (heading) {
    return (
      <span className={heading[1].length === 1 ? "md-h1" : "md-h2"}>
        <span className="md-marker">{heading[1]} </span>
        {heading[2]}
      </span>
    );
  }
  const item = line.match(/^(- |\d+\. )(.*)$/);
  if (item) {
    return (
      <>
        <span className="md-marker">{item[1]}</span>
        {item[2]}
      </>
    );
  }
  return line;
}

export function SkillFile() {
  const lines = SKILL_FILE.split("\n");
  const frontmatterEnd = lines.indexOf("---", 1);

  return (
    <figure className="skill-file reveal-on-scroll" aria-label="SKILL.md describing Mico">
      <figcaption className="skill-file-bar">
        <FileText size={15} aria-hidden="true" />
        SKILL.md
        <span className="skill-file-path">.claude/skills/mico-balmaceda/</span>
      </figcaption>
      <pre>
        <code className="reveal-lines">
          {lines.map((line, index) => (
            <span className="md-line" key={index} style={{ "--i": index } as CSSProperties}>
              {highlight(line, index > 0 && index < frontmatterEnd)}
              {index === lines.length - 1 && <span className="md-caret" aria-hidden="true" />}
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
