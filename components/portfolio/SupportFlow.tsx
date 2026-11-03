import { CheckCheck, Ear, FileText, Repeat, Wrench } from "lucide-react";
import { SUPPORT_STEPS } from "@/data/portfolioData";

// One icon per step, in the order of SUPPORT_STEPS.
const ICONS = [Ear, Repeat, Wrench, FileText, CheckCheck];

export function SupportFlow() {
  return (
    <section id="support" className="section support" aria-labelledby="support-title">
      <div className="shell">
        <h2 id="support-title" className="section-title reveal-on-scroll">
          How I help when something breaks
        </h2>
        <ol className="support-steps reveal-stagger">
          {SUPPORT_STEPS.map((step, index) => {
            const Icon = ICONS[index] ?? CheckCheck;
            return (
              <li className="support-step" key={step.title}>
                <span className="support-icon">
                  <Icon size={24} strokeWidth={1.9} aria-hidden="true" />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
