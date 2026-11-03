import { Bot, Terminal } from "lucide-react";
import { AI_TOOLS } from "@/data/portfolioData";
import { AgentLoop } from "./AgentLoop";
import { SkillFile } from "./SkillFile";
import { TechLogo, brandAttributes } from "./TechChip";

// Claude Code shares Claude's mark, so a small terminal badge tells the two tiles apart.
const TERMINAL_TOOLS = new Set(["Claude Code"]);

export function AgenticCoding() {
  return (
    <section id="ai" className="section agentic" aria-labelledby="ai-title">
      <div className="shell">
        <div className="agentic-panel reveal-on-scroll">
          <div className="agentic-intro">
            <p className="agentic-kicker">
              <Bot size={16} aria-hidden="true" />
              AI-assisted and agentic coding
            </p>
            <h2 id="ai-title" className="section-title">
              I build with AI agents.
            </h2>
            <p className="agentic-sub">
              I work with Claude Code, Cursor AI and ChatGPT to plan, build, test and document
              software, then I review what the agents produce.
            </p>
            <ul className="tool-grid">
              {AI_TOOLS.map((tool) => (
                <li className="tool-tile" key={tool.name} {...brandAttributes(tool.name)}>
                  <span className="tool-logo">
                    <TechLogo name={tool.name} />
                    {TERMINAL_TOOLS.has(tool.name) && (
                      <span className="tool-badge">
                        <Terminal size={12} strokeWidth={2.75} aria-hidden="true" />
                      </span>
                    )}
                  </span>
                  <span className="tool-name">{tool.name}</span>
                  <span className="tool-note">{tool.note}</span>
                </li>
              ))}
            </ul>
          </div>
          <AgentLoop />
        </div>

        <div className="skill-file-row">
          <div className="skill-file-intro reveal-on-scroll">
            <h3>My SKILL.md</h3>
            <p>
              Agent skills are Markdown files that teach an AI agent how to do a job. If I wrote one
              about myself, it would look like this.
            </p>
          </div>
          <SkillFile />
        </div>
      </div>
    </section>
  );
}
