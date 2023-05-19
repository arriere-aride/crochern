import { type SingleCrochetLoopStitch as ISingleCrochetLoopStitch } from "./SingleCrochetLoopStitch.d";
import { SingleCrochetLoopStitchSvg } from "./SingleCrochetLoopStitch.styled";

/**
 * Render Single Crochet Loop Stitch
 * (point fourrure)
 */
export const SingleCrochetLoopStitch = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
    backgroundColor: "transparent",
  },
  position = { x: 0, y: 0 },
  size = 16,
  padding = 1,
}: ISingleCrochetLoopStitch) => {
  const { x, y } = position;
  const doubleStrokeWidth =
    (theme.strokeWidth ?? 1) * 2;
  const halfSize = Math.floor(size / 2);
  const center = {
    x: x + halfSize,
    y: y + halfSize,
  };
  const strokeWidth = theme.strokeWidth ?? 2;
  const box = {
    min: { x: x + padding, y: y + padding },
    max: {
      x: center.x + halfSize - padding,
      y: center.y + halfSize - padding,
    },
  };

  return (
    <SingleCrochetLoopStitchSvg
      id={`render-item-tsct--1`}
      {...theme}
    >
      <g id={`render-item-tsct-container--1`}>
        <path
          d={`M ${box.min.x} ${box.min.y} C ${box.min.x} ${box.max.y} ${box.max.x}, ${box.max.y} ${box.max.x} ${box.min.y} `}
          fill={theme.backgroundColor}
        />
      </g>
      <g
        id={`render-item-tsct-sc--1`}
        stroke={theme.color}
        strokeWidth={theme.strokeWidth}
      >
        <line
          x1={box.min.x + strokeWidth + padding}
          y1={center.y - strokeWidth - padding}
          x2={box.max.x - strokeWidth - padding}
          y2={center.y - strokeWidth - padding}
        />
        <line
          x1={center.x}
          y1={box.min.y}
          x2={center.x}
          y2={center.y + padding}
        />
      </g>
    </SingleCrochetLoopStitchSvg>
  );
};
