import {
  GridCell,
  RenderTargetBox,
  useBoundingGrid,
  useScroll,
} from "@/components";
import { SelectTargetEntity } from "@/selectors";
import * as React from "react";
import { type Grid as IGrid } from "./Grid.d";

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
  onGridClick = () => true,
  onTargetEntityClick = () => true,
}: IGrid) => {
  const [scale, setScale] =
    React.useState<number>(baseScale);
  const targets = SelectTargetEntity();
  useScroll((event: any) => {
    if (event.ctrlKey) {
      setScale((previousScale) => {
        previousScale += event.deltaY * -0.01;
        return Math.min(
          Math.max(1, previousScale),
          maxScale
        );
      });
    }
  });
  const [currentGridProps, setCurrentGridProps] =
    useBoundingGrid({ id });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...grid}
      id={id}
      onClick={(event) => {
        onGridClick(event, currentGridProps);
      }}
    >
      <g transform={`scale(${scale})`}>
        <defs>
          <GridCell {...cell} id="b" />
          <GridCell {...separator} id="c" />
        </defs>
        {["b", "c"].map((id: string) => (
          <rect
            key={`grid-rect-${id}`}
            width="100%"
            height="100%"
            fill={`url(#${id})`}
          />
        ))}
      </g>
      <RenderTargetBox
        targets={targets}
        onTargetEntityClick={onTargetEntityClick}
      />
    </svg>
  );
};
export { Grid };
