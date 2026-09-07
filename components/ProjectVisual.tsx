export function ProjectVisual({ kind }: { kind: "dataset" | "retrieval" }) {
  if (kind === "dataset") {
    return (
      <svg viewBox="0 0 480 280" className="h-full w-full" aria-hidden>
        <rect width="480" height="280" fill="transparent" />
        {Array.from({ length: 24 }).map((_, i) => {
          const col = i % 8;
          const row = Math.floor(i / 8);
          const x = 28 + col * 56;
          const y = 36 + row * 72;
          const faded = [3, 7, 11, 18].includes(i);
          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width="42"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeOpacity={faded ? 0.18 : 0.45}
                rx="1"
              />
              {faded ? (
                <line
                  x1={x + 6}
                  y1={y + 6}
                  x2={x + 36}
                  y2={y + 42}
                  stroke="currentColor"
                  strokeOpacity="0.25"
                />
              ) : (
                <circle cx={x + 21} cy={y + 24} r="4" fill="currentColor" opacity="0.35" />
              )}
            </g>
          );
        })}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 480 280" className="h-full w-full" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="24" y="40" width="90" height="48" opacity="0.5" />
        <rect x="24" y="116" width="90" height="48" opacity="0.5" />
        <rect x="24" y="192" width="90" height="48" opacity="0.5" />
        <rect x="195" y="104" width="90" height="72" opacity="0.7" />
        <rect x="366" y="88" width="90" height="104" opacity="0.9" />
        <path d="M114 64 H160 V140 H195" opacity="0.4" />
        <path d="M114 140 H195" opacity="0.4" />
        <path d="M114 216 H160 V140" opacity="0.4" />
        <path d="M285 140 H366" opacity="0.55" />
      </g>
      <text x="40" y="68" className="fill-current" fontSize="9" opacity="0.6">
        PDF
      </text>
      <text x="40" y="144" className="fill-current" fontSize="9" opacity="0.6">
        TXT
      </text>
      <text x="40" y="220" className="fill-current" fontSize="9" opacity="0.6">
        MD
      </text>
      <text x="214" y="144" className="fill-current" fontSize="9" opacity="0.7">
        FAISS
      </text>
      <text x="388" y="144" className="fill-current" fontSize="9" opacity="0.85">
        QA
      </text>
    </svg>
  );
}
