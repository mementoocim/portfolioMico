import { AI_TOOLS } from "@/data/portfolioData";
import { AgentLoop } from "./AgentLoop";
import { TickBox, cssVars } from "./FormParts";
import { SkillFile } from "./SkillFile";
import { TechLogo, brandStyle } from "./TechLogo";

export function AgenticCoding() {
  return (
    <section id="ai" aria-labelledby="ai-title">
      <h2 className="bar" id="ai-title">
        <span>V.</span> AI-assisted and agentic coding
      </h2>
      <div className="grid">
        <div className="field span-5">
          <span className="label">
            <b>16.</b> How do you build software?
          </span>
          <p className="hand answer reveal">
            <span className="write">I build with AI agents.</span>
          </p>
          <p className="typed">
            I work with Claude Code, Cursor AI and ChatGPT to plan, build, test and document
            software, then I review what the agents produce.
          </p>
          <span className="label tools-label">
            <b>17.</b> AI tools operated <small>(Tick all that apply)</small>
          </span>
          <ul className="tick-list tool-ticks reveal">
            {AI_TOOLS.map((tool, index) => (
              <li key={tool.name} style={brandStyle(tool.name, cssVars({ "--i": index }))}>
                <TickBox />
                <span className="tool-logo">
                  <TechLogo name={tool.name} />
                </span>
                <span className="typed">
                  <span className="tool-name">{tool.name}</span>
                  <span className="typed-sm">{tool.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="field span-7 figure-cell">
          <span className="label">Figure 1. The agent loop</span>
          <div className="loop-wrap reveal">
            <AgentLoop />
          </div>
        </div>
        <div className="field span-4">
          <span className="label">
            <b>18.</b> Attach your SKILL.md
          </span>
          <p className="typed">
            Agent skills are Markdown files that teach an AI agent how to do a job. If I wrote one
            about myself, it would look like this.
          </p>
        </div>
        <div className="field span-8">
          <SkillFile />
        </div>
      </div>
    </section>
  );
}
