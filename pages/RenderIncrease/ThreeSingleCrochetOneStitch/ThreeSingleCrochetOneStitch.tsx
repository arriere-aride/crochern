import React from "react";

interface ThreeSingleCrochetOneStitch {
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

}

/** Render Two Single Crochet in One Stitch  (2 Mailles Serrées dans la même Maille) */
export const ThreeSingleCrochetOneStitch = ({
  fillColor = "#1a1a1a",
  position = { x: 50, y: 50 },
  size = 16,
  ...props
}: ThreeSingleCrochetOneStitch) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const tierceSize = Math.floor(size / 3);
  const padding = 2

  return (
    <g id={`render-item-thscoc--${id}`} stroke={fillColor} strokeWidth={2}>
      <g
        id={`render-item-thscoc-sc--${id}`}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      >
        <line
          x1={x - tierceSize }
          y1={y - tierceSize * 2 - padding}
          x2={x + tierceSize }
          y2={y - tierceSize * 2 - padding}
        />
        <line x1={x} y1={y - tierceSize - padding} x2={x} y2={y - size} />
      </g>
      <g id={`render-item-thscoc-container--${id}`}>
        <path d={`M ${x} ${y} ${x - size} ${y - size} `} />
        <path d={`M ${x} ${y} ${x + size} ${y - size} `} />
        <path d={`M ${x} ${y} ${x} ${y-tierceSize}`} />
      </g>
    </g>
  );
};
