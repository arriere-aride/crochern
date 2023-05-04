import * as React from "react";
import { useScroll, useToggle } from "../hooks";
import { useSelector } from "react-redux";
import store from "@/stores/EntityMoveStore";

type unit = number | string;
export interface Grid {
  /**
   *  Which id svg container have
   */
  id?: string;
  /**
   * Cell is the most little atom in grid
   */
  cell?: {
    size: unit;
    stroke: string;
    strokeWidth: unit;
  };
  /**
   * Separator separates cell
   */
  separator?: {
    size: unit;
    stroke: string;
    strokeWidth: unit;
  };
  /**
   * Grid container
   */
  grid?: {
    stroke: string;
    strokeWidth: unit;
    width: unit;
    height: unit;
  };
  /**
   * What scale to use
   */
  baseScale?: number;
  /**
   * What scale can it max
   */
  maxScale?: number;
  /**
   * What to do on Grid click
   */
  onGridClick?: (values: any) => any;
}

const Grid = ({
  id = "grid-id",
  cell = {
    strokeWidth: 0.5,
    stroke: "gray",
    size: 8,
  },
  separator = {
    strokeWidth: 1,
    stroke: "gray",
    size: 80,
  },
  grid = {
    strokeWidth: 0.5,
    stroke: "gray",
    width: "100%",
    height: 800,
  },
  baseScale = 1,
  maxScale = 12,
  onGridClick,
}: Grid) => {
  const [scale, setScale] = React.useState<number>(baseScale);
  const targets = useSelector((state: any) => state.target);
  useScroll((event: any) => {
    if (event.ctrlKey) {
      setScale((previousScale) => {
        previousScale += event.deltaY * -0.01;
        return Math.min(Math.max(1, previousScale), maxScale);
      });
    }
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...grid}
      id={id}
      onClick={onGridClick}
    >
      {targets?.length > 0 &&
        targets.map(({ entity, position }: any) => {
          return React.Children.map(entity, (child) => {
            return (
              <svg x={position.x} y={position.y}>
                {React.cloneElement(child)}
              </svg>
            );
          });
        })}
      <g transform={`scale(${scale})`}>
        <defs>
          <pattern
            id="a"
            width={cell.size}
            height={cell.size}
            patternUnits="userSpaceOnUse"
          >
            <path
              fill="none"
              stroke={cell.stroke}
              strokeWidth={cell.strokeWidth}
              d={`M${cell.size} 0H0v${cell.size}`}
            />
          </pattern>
          <pattern
            id="b"
            width={separator.size}
            height={separator.size}
            patternUnits="userSpaceOnUse"
          >
            <path
              fill="url(#a)"
              d={`M0 0h${separator.size}v${separator.size}H0z`}
            />
            <path
              fill="none"
              stroke={separator.stroke}
              strokeWidth={separator.strokeWidth}
              d={`M${separator.size} 0H0v${separator.size}`}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#b)" />
      </g>
    </svg>
  );
};
export { Grid };
