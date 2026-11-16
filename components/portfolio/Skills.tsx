import { SKILLS, TECH_STACK } from "@/data/portfolioData";
import { TickBox, cssVars } from "./FormParts";
import { TechLogo, brandStyle } from "./TechLogo";

// The tech stack gets its own row with logos; every other group is a plain checklist.
const CHECKLISTS = SKILLS.filter((group) => group.skills !== TECH_STACK);

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <h2 className="bar" id="skills-title">
        <span>VII.</span> Qualifications <small>(Tick all that apply)</small>
      </h2>
      <div className="grid">
        {CHECKLISTS.map((group, groupIndex) => (
          <div className="field span-6" key={group.title}>
            <span className="label">
              <b className="no" /> {group.title}
            </span>
            <ul className="tick-list typed reveal">
              {group.skills.map((skill, index) => (
                <li key={skill} style={cssVars({ "--i": index })}>
                  <TickBox />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="field span-12">
          <span className="label">
            <b className="no" /> Tech stack
          </span>
          <ul className="tick-list tech-ticks typed reveal">
            {TECH_STACK.map((name, index) => (
              <li key={name} style={brandStyle(name, cssVars({ "--i": index }))}>
                <TickBox />
                <span className="tool-logo">
                  <TechLogo name={name} />
                </span>
                <span className="tool-name">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
