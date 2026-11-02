"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { PointerEvent } from "react";
import { Mark } from "./Mark";
import { PERSONAL } from "@/data/portfolioData";

// A damped pendulum: each swing is smaller than the last until the badge settles.
const SWING: Keyframe[] = [
  { transform: "rotate(0deg)", easing: "ease-out" },
  { transform: "rotate(7deg)", offset: 0.16, easing: "ease-in-out" },
  { transform: "rotate(-5deg)", offset: 0.38, easing: "ease-in-out" },
  { transform: "rotate(3deg)", offset: 0.58, easing: "ease-in-out" },
  { transform: "rotate(-1.4deg)", offset: 0.76, easing: "ease-in-out" },
  { transform: "rotate(0.5deg)", offset: 0.9, easing: "ease-in-out" },
  { transform: "rotate(0deg)" },
];

const MAX_TILT_DEG = 4;

const LANYARD_PRINT = Array(6).fill("Systems & User Support").join("  /  ");

export function IdBadge() {
  const rig = useRef<HTMLDivElement>(null);
  const swing = useRef<HTMLDivElement>(null);
  const reducedMotion = useRef(true);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion.current) return;
    const animation = swing.current?.animate(SWING, { duration: 2400, delay: 400 });
    return () => animation?.cancel();
  }, []);

  function nudge() {
    if (reducedMotion.current) return;
    swing.current?.animate(SWING, { duration: 2000 });
  }

  // Lean toward the pointer. The center comes from the untransformed parent, so the
  // badge moving under the pointer does not feed back into the angle.
  function lean(event: PointerEvent<HTMLDivElement>) {
    const anchor = rig.current?.parentElement;
    if (reducedMotion.current || event.pointerType !== "mouse" || !anchor) return;
    const box = anchor.getBoundingClientRect();
    const offset = (event.clientX - (box.left + box.width / 2)) / (box.width / 2);
    const tilt = Math.max(-1, Math.min(1, offset)) * -MAX_TILT_DEG;
    rig.current?.style.setProperty("--tilt", `${tilt.toFixed(2)}deg`);
  }

  function settle() {
    rig.current?.style.setProperty("--tilt", "0deg");
  }

  return (
    <div className="badge-rig" ref={rig}>
      <div className="badge-swing" ref={swing}>
        <div className="lanyard" aria-hidden="true">
          <span className="lanyard-print">{LANYARD_PRINT}</span>
        </div>
        <div className="badge-clip" aria-hidden="true" />
        <div
          className="id-badge"
          onPointerMove={lean}
          onPointerLeave={settle}
          onPointerDown={nudge}
        >
          <span className="badge-slot" aria-hidden="true" />
          <div className="badge-band">
            <Mark />
            <span>Systems &amp; User Support</span>
          </div>
          <div className="badge-photo">
            <Image
              src={PERSONAL.photo}
              alt={`Portrait of ${PERSONAL.name}`}
              width={640}
              height={640}
              priority
              sizes="(max-width: 860px) 250px, 330px"
            />
          </div>
          <p className="badge-name">{PERSONAL.name}</p>
          <p className="badge-role">IT Graduate, Class of 2026</p>
          <dl className="badge-fields">
            <div>
              <dt>Certified</dt>
              <dd>{PERSONAL.certification.shortTitle}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Open to work</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
