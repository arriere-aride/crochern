import React from "react";

interface FrontLoopOnly {
  /**
   * What fill color to use
   */
  fillColor?: string;

  /**
   * Where to position
   */
  position?: {
    x: number;
    y: number;
  };
  /**
   * Line size
   */
  size?: number;
  /**
   * Arc debug toggle
   */
  debug?: boolean;
}

/** Render In front loop only (Dans le brin avant) */
export const FrontLoopOnly = ({
  fillColor = "#1a1a1a",
  position = { x: 50, y: 50 },
  size = 16,
  debug = false,
  ...props
}: FrontLoopOnly) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const quarterSize = Math.floor(size / 4);
  const curve: { x: string; y: string }[] = [
    { x: `${x + quarterSize}`, y: `${y + quarterSize}` },
    { x: `${x + quarterSize * 3}`, y: `${y + quarterSize}` },
  ];

  return (
    <g
      id={`render-item-flo--${id}`}
      stroke={fillColor}
      strokeWidth={2}
      fill="transparent"
    >
      <path
        d={`M ${x} ${y} C ${curve[0].x} ${curve[0].y}, ${curve[1].x} ${
          curve[1].y
        }, ${x + size} ${y} `}
      />
      {debug && (
        <g id={`debug-render-item-flo--${id}`} fill="red" strokeWidth={0} >
          <circle cx={curve[0].x} cy={curve[0].y}  r={1} />
          <circle cx={curve[1].x} cy={curve[1].y}  r={1} />
        </g>
      )}
    </g>
  );
};