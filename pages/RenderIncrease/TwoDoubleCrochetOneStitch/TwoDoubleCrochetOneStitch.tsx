import { DoubleCrochet } from "@/pages/RenderEntity";
import React from "react";

interface TwoDoubleCrochetOneStitch {
  /**
   * What fill color to use
   */
  fillColor?: string;

  /**
   * Where to position both dc
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

/** Render Two Double Crochet in One Stitch  (2 Brides dans la même Maille) */
export const TwoDoubleCrochetOneStitch = ({
  fillColor = "#1a1a1a",
  position = { x: 50, y: 50 },
  size = 16,
  ...props
}: TwoDoubleCrochetOneStitch) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const rotate = [`rotate(${45})`, `rotate(-${45})`]; // Math sin cos pour tracer autour d’un cercle
  const halfSize = Math.floor(size /2)
  const padding = 2
  return (
    <g>
      <svg x={x + padding} y={y}>
        <g
          key={`render-item-dcoc-1-${id}`}
          stroke={fillColor}
          strokeWidth={2}
          transform={rotate[0]}
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <DoubleCrochet size={16} rotation={15} />
        </g>
      </svg>
      <svg x={x - halfSize} y={y}>
        <g
          key={`render-item-dcoc-1-${id}`}
          stroke={fillColor}
          strokeWidth={2}
          transform={rotate[1]}
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <DoubleCrochet size={16} rotation={15} />
        </g>
      </svg>
    </g>
  );
};
