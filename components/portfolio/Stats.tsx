import { AI_TOOLS, PROJECTS, TECH_STACK } from "@/data/portfolioData";
import { CountUp } from "./CountUp";

const STATS = [
  { value: 3700, suffix: "+", label: "examinees processed by CollegeBound" },
  { value: PROJECTS.length, label: "school systems built" },
  { value: 4, label: "months supporting users at the ISU MIS Office" },
  {
    value: AI_TOOLS.length + TECH_STACK.length,
    label: "tools in my stack, from PHP to Claude Code",
  },
];

export function Stats() {
  return (
    <section className="stats" aria-label="Highlights">
      <div className="shell">
        <ul className="stats-grid reveal-stagger">
          {STATS.map((stat) => (
            <li className="stat" key={stat.label}>
              <strong className="stat-value">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </strong>
              <span className="stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
