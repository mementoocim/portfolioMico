import { AI_TOOLS, SKILLS } from "@/data/portfolioData";
import { TechChip } from "./TechChip";

const TECH_STACK = SKILLS.find((group) => group.title === "Tech Stack")?.skills ?? [];
const TOOLS = [...AI_TOOLS.map((tool) => tool.name), ...TECH_STACK];

/** An endless strip of tool logos. The second copy makes the loop seamless. */
export function ToolMarquee() {
  return (
    <div className="marquee" role="region" aria-label="Tools I use">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul className="marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {TOOLS.map((name, index) => (
              <TechChip key={name} name={name} index={index} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
