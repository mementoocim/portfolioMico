import { CheckCheck, Ear, FileText, Repeat, Wrench } from "lucide-react";
import { SUPPORT_STEPS } from "@/data/portfolioData";
import { cssVars } from "./FormParts";

// One icon per step, in the order of SUPPORT_STEPS.
const ICONS = [Ear, Repeat, Wrench, FileText, CheckCheck];

export function SupportFlow() {
  return (
    <section id="support" aria-labelledby="support-title">
      <h2 className="bar" id="support-title">
        <span>IV.</span> How I help when something breaks <small>(Follow in order)</small>
      </h2>
      <ol className="steps reveal">
        {SUPPORT_STEPS.map((step, index) => {
          const Icon = ICONS[index] ?? CheckCheck;
          return (
            <li className="step" key={step.title} style={cssVars({ "--i": index })}>
              <span className="step-no" aria-hidden="true">
                <svg viewBox="0 0 58 58">
                  <ellipse
                    cx="29"
                    cy="29"
                    rx="25"
                    ry="20"
                    pathLength={1}
                    transform="rotate(-14 29 29)"
                  />
                </svg>
                <span className="hand">{index + 1}</span>
              </span>
              <h3>
                <Icon size={17} strokeWidth={2.2} aria-hidden="true" />
                {step.title}
              </h3>
              <p className="typed">{step.text}</p>
              {index < SUPPORT_STEPS.length - 1 && (
                <svg className="step-arrow" viewBox="0 0 34 18" aria-hidden="true">
                  <path d="M2 9h29M22 2l9 7-9 7" />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
