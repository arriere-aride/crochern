import { DoubleCrochet } from "@/pages/RenderEntity";
import React from "react";

interface RepeatDoubleCrochetTogether {
  /**
   * How much repeat
   */
  repeat?: number;
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

/** Render {repeat} Double Crochet Together  ({repeat} Brides écoulées ensemble) */
export const RepeatDoubleCrochetTogether = ({
  fillColor = "#1a1a1a",
  position = { x: 50, y: 50 },
  size = 16,
  repeat = 3,
  ...props
}: RepeatDoubleCrochetTogether) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const rotate = [`rotate(${115})`, `rotate(180)`, `rotate(-${115})`];
  const halfSize = Math.floor(size / 2);
  const tierceSize = Math.floor(size / 3);
  const quarterSize = Math.floor(size / 4);
  const padding = 2;
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
      <svg x={x - quarterSize} y={y + tierceSize}>
        <g
          key={`render-item-dcoc-2-${id}`}
          stroke={fillColor}
          strokeWidth={2}
          transform={rotate[1]}
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <DoubleCrochet size={16} rotation={15} />
        </g>
      </svg>
      <svg x={x - halfSize - padding} y={y}>
        <g
          key={`render-item-dcoc-3-${id}`}
          stroke={fillColor}
          strokeWidth={2}
          transform={rotate[2]}
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <DoubleCrochet size={16} rotation={15} />
        </g>
      </svg>
      {repeat >= 4 && (
        <svg x={x - quarterSize} y={y - halfSize}>
          <circle
            r={repeat < 10 ? 8 : 10}
            cx={50}
            cy={48}
            fill={"#1a1a1a"}
            stroke="white"
            strokeWidth={1}
          />
          <text x={repeat < 10 ? 47 : 43} y={52} fontSize="12px" fill="white">
            {repeat}
          </text>
        </svg>
      )}
    </g>
  );
};
