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
    rx: number;
    ry: number;
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
  radius = { rx: 16, ry: 8 },
  position = { cx: 50, cy: 50 },
  ...props
}: Chain) => {
  const id: string = Math.floor(Math.random() * 100).toString();

  return (
    <g id={`render-item-ch--${id}`} fill={fillColor}>
      <ellipse
        cx={position.cx.toString()}
        cy={position.cy.toString()}
        rx={radius.rx.toString()}
        ry={radius.ry.toString()}
      />
    </g>
  );
};
