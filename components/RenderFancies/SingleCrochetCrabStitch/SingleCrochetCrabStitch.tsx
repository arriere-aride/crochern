import { SingleCrochetCrabStitch as ISingleCrochetCrabStitch } from "./SingleCrochetCrabStitch.d";
import {
  SingleCrochetCrabStitchContainer,
  SingleCrochetCrabStitchGroup,
} from "./SingleCrochetCrabStitch.styled";

/** Render Single crochet (maille serrée) */
export const SingleCrochetCrabStitch = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
    backgroundColor: "transparent",
  },
  size = 16,
  position = { x: 0, y: 0 },
  rotation = 0,
  padding = 1,
}: ISingleCrochetCrabStitch): JSX.Element => {
  const { x, y } = position;
  const rotate = `rotate(${rotation})`;
  const halfSize = Math.floor(size / 2);
  const quarterSize = Math.floor(size / 4);
  const strokeWidth = theme.strokeWidth ?? 2;
  const center = {
    x: x + halfSize,
    y: y + halfSize,
  };
  const box = {
    min: { x: x + padding, y: y + padding },
    max: {
      x: center.x + halfSize - padding,
      y: center.y + halfSize - padding,
    },
  };

  return (
    <SingleCrochetCrabStitchContainer
      x={x}
      y={y}
      width={box.max.x}
      height={box.max.y}
      {...theme}
    >
      <SingleCrochetCrabStitchGroup
        id={`render-item-sccs--1`}
        {...theme}
        transform={rotate}
      >
        <line
          x1={box.min.x}
          y1={center.y}
          x2={box.max.x}
          y2={center.y}
        />
        <line
          x1={center.x}
          y1={box.min.y + padding}
          x2={center.x}
          y2={box.max.y}
        />
      </SingleCrochetCrabStitchGroup>
      <g fill={theme.backgroundColor}>
        <path
          d={`M ${box.min.x + padding} ${
            box.min.y + quarterSize
          } Q ${center.x} ${box.min.y} ${
            center.x
          } ${box.min.y + padding}`}
        />
        <path
          d={`M ${center.x} ${box.min.y + padding}
          Q ${center.x + strokeWidth} ${
            box.min.y + quarterSize
          } 
          ${box.max.x - padding} ${box.min.y}`}
        />
      </g>
    </SingleCrochetCrabStitchContainer>
  );
};
