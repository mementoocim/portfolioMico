import type { CSSProperties } from "react";
import { Bot, Code2, FlaskConical, ListChecks, UserCheck } from "lucide-react";

const CENTER = 260;
const RADIUS = 190;

const STEPS = [
  { label: "Plan", Icon: ListChecks },
  { label: "Build", Icon: Code2 },
  { label: "Test", Icon: FlaskConical },
  { label: "Review", Icon: UserCheck },
];

// A point on the loop, measured clockwise from the top.
function pointAt(degrees: number) {
  const radians = (degrees * Math.PI) / 180;
  return {
    x: CENTER + RADIUS * Math.sin(radians),
    y: CENTER - RADIUS * Math.cos(radians),
  };
}

/** The agent loop. A yellow pulse runs clockwise and lights each step as it passes. */
export function AgentLoop() {
  return (
    <svg className="agent-loop" viewBox="0 0 520 520" role="img" aria-labelledby="agent-loop-title">
      <title id="agent-loop-title">
        The agent loop: plan, build and test with an AI agent, then I review, and repeat.
      </title>
      <defs>
        <radialGradient id="agent-core-glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#fcc92b" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#fcc92b" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle className="loop-orbit" cx={CENTER} cy={CENTER} r={240} />
      <circle className="loop-track" cx={CENTER} cy={CENTER} r={RADIUS} />
      <circle
        className="loop-flow"
        cx={CENTER}
        cy={CENTER}
        r={RADIUS}
        transform={`rotate(-90 ${CENTER} ${CENTER})`}
      />
      {[45, 135, 225, 315].map((degrees) => {
        const { x, y } = pointAt(degrees);
        return (
          <path
            key={degrees}
            className="loop-arrow"
            d="M -5 -7 L 4 0 L -5 7"
            transform={`translate(${x} ${y}) rotate(${degrees})`}
          />
        );
      })}

      <circle
        className="loop-core-glow"
        cx={CENTER}
        cy={CENTER}
        r={130}
        fill="url(#agent-core-glow)"
      />
      <circle className="loop-core" cx={CENTER} cy={CENTER} r={84} />
      <Bot
        className="loop-core-icon"
        x={CENTER - 19}
        y={CENTER - 50}
        size={38}
        strokeWidth={1.75}
      />
      <text className="loop-core-title" x={CENTER} y={CENTER + 14} textAnchor="middle">
        AI agent
      </text>
      <text className="loop-core-note" x={CENTER} y={CENTER + 36} textAnchor="middle">
        human in the loop
      </text>

      {STEPS.map(({ label, Icon }, index) => {
        const { x, y } = pointAt(index * 90);
        return (
          <g className="loop-step" key={label} style={{ "--n": index } as CSSProperties}>
            <circle className="loop-step-bg" cx={x} cy={y} r={50} />
            <Icon className="loop-step-icon" x={x - 13} y={y - 27} size={26} strokeWidth={2} />
            <text className="loop-step-label" x={x} y={y + 22} textAnchor="middle">
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
