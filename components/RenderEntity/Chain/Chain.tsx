import React from "react";

interface Chain {
  /**
   * What fill color to use
   */
  fillColor?: string;
  /**
   * What radius to use
   */
  radius?: {
    rx?: number;
    ry?: number;
  };
  /**
   * Where to position
   */
  position?: {
    cx: number;
    cy: number;
  };
}

/** Render Chain (maille en l’air) */
export const Chain = ({
  fillColor = "#1a1a1a",
  radius = { rx: 8, ry: 4 },
  position = { cx: 8, cy: 4 },
  ...props
}: Chain) => {
  const id: number = Math.floor(Math.random() * 100);
  const { rx, ry } = {
    rx: radius.rx || Math.floor((radius.ry || 1) * 2),
    ry: radius.ry || Math.floor((radius.rx || 1) / 2),
  };

  return (
    <g id={`render-item-ch--${id}`} fill={fillColor}>
      <ellipse cx={position.cx} cy={position.cy} rx={rx} ry={ry} />
    </g>
  );
};
