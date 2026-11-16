import { Code2, FlaskConical, ListChecks, UserCheck } from "lucide-react";
import { cssVars } from "./FormParts";

const CX = 280;
const CY = 200;
const RX = 200;
const RY = 138;
const NODE_RADIUS = 47;

const STEPS = [
  { label: "Plan", Icon: ListChecks },
  { label: "Build", Icon: Code2 },
  { label: "Test", Icon: FlaskConical },
  { label: "Review", Icon: UserCheck },
];

const round = (value: number) => Math.round(value * 10) / 10;

// A point on the loop and the direction of travel there, measured clockwise from the top.
function pointAt(degrees: number) {
  const t = (degrees * Math.PI) / 180;
  return {
    x: round(CX + RX * Math.sin(t)),
    y: round(CY - RY * Math.cos(t)),
    heading: round((Math.atan2(RY * Math.sin(t), RX * Math.cos(t)) * 180) / Math.PI),
  };
}

// The whole loop as one path that starts at the top and runs clockwise.
const TRACK = [
  `M ${CX} ${CY - RY}`,
  `A ${RX} ${RY} 0 0 1 ${CX + RX} ${CY}`,
  `A ${RX} ${RY} 0 0 1 ${CX} ${CY + RY}`,
  `A ${RX} ${RY} 0 0 1 ${CX - RX} ${CY}`,
  `A ${RX} ${RY} 0 0 1 ${CX} ${CY - RY}`,
].join(" ");

/** The agent loop as a pen sketch. A heavier pen mark keeps circling the loop and each
    step is shaded as the mark passes it. */
export function AgentLoop() {
  return (
    <svg className="agent-loop" viewBox="0 0 560 400" role="img" aria-labelledby="agent-loop-title">
      <title id="agent-loop-title">
        The agent loop: plan, build and test with an AI agent, then I review, and repeat.
      </title>
      <defs>
        <pattern
          id="pen-hatch"
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(38)"
        >
          <line x1="0" y1="0" x2="0" y2="7" stroke="currentColor" strokeWidth="1.6" />
        </pattern>
      </defs>

      <g className="loop-sketch">
        <path className="loop-track" d={TRACK} pathLength={1} />
        <path className="loop-pulse" d={TRACK} pathLength={1} />
        {[45, 135, 225, 315].map((degrees) => {
          const { x, y, heading } = pointAt(degrees);
          return (
            <path
              key={degrees}
              d="M -11 -8 L 0 0 L -11 8"
              transform={`translate(${x} ${y}) rotate(${heading})`}
            />
          );
        })}
        {STEPS.map((step, index) => {
          const { x, y } = pointAt(index * 90);
          return (
            <g key={step.label}>
              <circle className="loop-node" cx={x} cy={y} r={NODE_RADIUS} />
              <circle
                className="loop-hatch"
                cx={x}
                cy={y}
                r={NODE_RADIUS - 3}
                fill="url(#pen-hatch)"
                style={cssVars({ "--n": index })}
              />
            </g>
          );
        })}
        <path d={`M ${CX - 78} ${CY + 12} q 40 9 80 2 t 78 -3`} />
      </g>

      {STEPS.map(({ label, Icon }, index) => {
        const { x, y } = pointAt(index * 90);
        return (
          <g key={label}>
            <Icon className="loop-icon" x={x - 13} y={y - 32} size={26} strokeWidth={2} />
            <text className="loop-text loop-label" x={x} y={y + 22} textAnchor="middle">
              {label}
            </text>
          </g>
        );
      })}
      <text className="loop-text loop-core-title" x={CX} y={CY + 2} textAnchor="middle">
        AI agent
      </text>
      <text className="loop-text loop-core-note" x={CX} y={CY + 40} textAnchor="middle">
        human in the loop
      </text>
    </svg>
  );
}
