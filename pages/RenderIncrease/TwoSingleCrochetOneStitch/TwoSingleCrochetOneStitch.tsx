import React from "react";

interface TwoSingleCrochetOneStitch {
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

/** Render Two Single Crochet in One Stitch  (2 Mailles Serrées dans la même Maille) */
export const TwoSingleCrochetOneStitch = ({
  fillColor = "#1a1a1a",
  position = { x: 50, y: 50 },
  size = 16,
  debug = false,
  ...props
}: TwoSingleCrochetOneStitch) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const tierceSize = Math.floor(size / 3);

  return (
    <g id={`render-item-tscoc--${id}`} stroke={fillColor} strokeWidth={2}>
      <g
        id={`render-item-tscoc-sc--${id}`}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      >
        <line
          x1={x - tierceSize }
          y1={y - tierceSize * 2}
          x2={x + tierceSize }
          y2={y - tierceSize * 2}
        />
        <line x1={x} y1={y - tierceSize} x2={x} y2={y - size} />
      </g>
      <g id={`render-item-tscoc-container--${id}`}>
        <path d={`M ${x} ${y} ${x - halfSize} ${y - size} `} />
        <path d={`M ${x} ${y} ${x + halfSize} ${y - size} `} />
      </g>
    </g>
  );
};
