import { AI_TOOLS, PROJECTS, TECH_STACK } from "@/data/portfolioData";
import { CountUp } from "./CountUp";

const STATS = [
  { value: 3700, suffix: "+", label: "Examinees processed by CollegeBound" },
  { value: PROJECTS.length, label: "Systems built" },
  { value: 4, label: "Months supporting users at the ISU MIS Office" },
  {
    value: AI_TOOLS.length + TECH_STACK.length,
    label: "Tools in my stack, from PHP to Claude Code",
  },
];

export function Stats() {
  return (
    <section aria-label="Highlights">
      <p className="strip-label">For statistical purposes only</p>
      <ul className="grid">
        {STATS.map((stat) => (
          <li className="field span-3 stat" key={stat.label}>
            <span className="label">{stat.label}</span>
            <strong className="hand stat-value">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
