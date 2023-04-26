import { DoubleCrochet } from "@/pages/RenderEntity";
import React from "react";

interface TwoDoubleCrochetOneStitch {
  /**
   * What fill color to use
   */
  fillColor?: string;
  /**
   * What stroke width to use
   */
  strokeWidth?: number;
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
  /**
   * What padding to use
   */
  padding?: number;
}

/** Render Two Double Crochet in One Stitch  (2 Brides dans la même Maille) */
export const TwoDoubleCrochetOneStitch = ({
  fillColor = "#1a1a1a",
  position = { x: 0, y: 0 },
  padding = 1,
  size = 16,
  strokeWidth = 2,
  ...props
}: TwoDoubleCrochetOneStitch) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const tierceSize = Math.floor(size / 3);
  const quarterSize = Math.floor(size / 4);
  const sixthSize = Math.floor(size / 6);
  const center = { x: x + halfSize, y: y + halfSize };
  const doubleStrokeWidth = strokeWidth * 2;
  const box = {
    min: { x: x + padding, y: y + padding },
    max: { x: center.x + halfSize - padding, y: center.y + halfSize - padding },
  };
  const rotate = [`rotate(${-15})`, `rotate(${15})`];

  return (
    <g
      id={`render-item-tdcos--${id}`}
      stroke={fillColor}
      strokeWidth={strokeWidth}
    >
      <path
        d={`M ${center.x} ${box.max.y} ${box.min.x + sixthSize} ${box.min.y} `}
      />
      <path
        d={`M ${box.min.x} ${box.min.y} ${box.min.x + tierceSize} ${
          box.min.y
        } `}
      />
      <g
        id={`render-item-tdcos-bar-left--${id}`}
        transform={rotate[0]}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      >
        <path
          d={`M ${box.min.x + strokeWidth} ${center.y} ${
            box.min.x + halfSize - strokeWidth
          } ${center.y} `}
        />
      </g>

      <path
        d={`M ${center.x} ${box.max.y} ${box.max.x - sixthSize} ${box.min.y} `}
      />
      <path
        d={`M ${box.max.x} ${box.min.y} ${box.max.x - tierceSize} ${
          box.min.y
        } `}
      />
      <g
        id={`render-item-tdcos-bar-right--${id}`}
        transform={rotate[1]}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      >
        <path
          d={`M ${box.max.x - strokeWidth} ${center.y} ${
            box.max.x - halfSize + strokeWidth
          } ${center.y} `}
        />
      </g>
    </g>
  );
};
