import { PROJECTS } from "@/data/portfolioData";
import { TickBox } from "./FormParts";

// The short name is handwritten on its own line, so the full title drops its "Name: " prefix.
const descriptiveTitle = (title: string) => title.replace(/^[^:]+: /, "");

export function SelectedWork() {
  const [flagship] = PROJECTS;

  return (
    <section id="projects" aria-labelledby="work-title">
      <h2 className="bar" id="work-title">
        <span>VI.</span> Systems I&apos;ve built
      </h2>
      <table className="sheet-table systems-table">
        <thead>
          <tr>
            <th scope="col">
              <b className="no" /> System
            </th>
            <th scope="col">
              <b className="no" /> Description
            </th>
            <th scope="col">
              <b className="no" /> Technologies
            </th>
          </tr>
        </thead>
        <tbody>
          {PROJECTS.map((project) => (
            <tr className="reveal" key={project.id}>
              <td data-label="System">
                <h3 className="hand record-name">
                  <span className="write">{project.shortTitle}</span>
                </h3>
                <p className="typed">
                  <strong>{descriptiveTitle(project.title)}</strong>
                </p>
                <p className="typed typed-sm">{project.category}</p>
              </td>
              <td className="typed" data-label="Description">
                <p>
                  <strong>{project.summary}</strong>
                </p>
                <p>{project.description}</p>
                {project === flagship && (
                  <p className="record-status">
                    <TickBox />
                    Deployed at ISU-Ilagan
                  </p>
                )}
              </td>
              <td className="typed" data-label="Technologies">
                <ul className="typed-list">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
