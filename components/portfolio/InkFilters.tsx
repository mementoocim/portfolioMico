/** SVG filters shared by everything that should look inked: the rubber stamp and pen sketches. */
export function InkFilters() {
  return (
    <svg className="ink-filters" width="0" height="0" aria-hidden="true" focusable="false">
      <defs>
        {/* Rubber stamp: speckled, uneven ink with slightly wavering edges. */}
        <filter id="rough-ink" x="-10%" y="-20%" width="120%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            seed="4"
            result="grain"
          />
          <feColorMatrix
            in="grain"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  9 0 0 0 -2.7"
            result="speckle"
          />
          <feComposite in="SourceGraphic" in2="speckle" operator="in" result="inked" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            numOctaves="2"
            seed="9"
            result="warp"
          />
          <feDisplacementMap
            in="inked"
            in2="warp"
            scale="3"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        {/* Pen sketch: clean shapes wobble like lines drawn by hand. */}
        <filter id="pen-wobble" x="-8%" y="-8%" width="116%" height="116%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.022"
            numOctaves="2"
            seed="12"
            result="warp"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="warp"
            scale="4"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
