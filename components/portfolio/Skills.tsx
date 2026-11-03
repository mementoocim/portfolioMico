import { Check } from "lucide-react";
import { SKILLS } from "@/data/portfolioData";
import { TechChip } from "./TechChip";

// One look per skill group, in data order: the lead group is the core of the role and runs
// full width, then the other two share a row.
const CELLS = [
  { style: "bento-lead", list: "check" },
  { style: "bento-dark", list: "check" },
  { style: "bento-plain", list: "chips" },
];

export function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="shell">
        <h2 id="skills-title" className="section-title reveal-on-scroll">
          What I bring to a team
        </h2>
        <div className="bento reveal-stagger">
          {SKILLS.map((category, index) => {
            const cell = CELLS[index] ?? CELLS[2];
            return (
              <article className={`bento-cell ${cell.style}`} key={category.title}>
                <h3>{category.title}</h3>
                {cell.list === "chips" ? (
                  <ul className="chip-list reveal-chips">
                    {category.skills.map((skill, chipIndex) => (
                      <TechChip key={skill} name={skill} index={chipIndex} />
                    ))}
                  </ul>
                ) : (
                  <ul className="check-list">
                    {category.skills.map((skill) => (
                      <li key={skill}>
                        <Check size={18} strokeWidth={2.5} aria-hidden="true" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
