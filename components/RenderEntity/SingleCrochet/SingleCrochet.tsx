import { SingleCrochet as ISingleCrochet } from "./SingleCrochet.d";
import {
  SingleCrochetContainer,
  SingleCrochetGroup,
} from "./SingleCrochet.styled";

/** Render Single crochet (maille serrée) */
export const SingleCrochet = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
    backgroundColor: "transparent",
  },
  size = 16,
  position = { x: 0, y: 0 },
  rotation = 0,
  padding = 1,
}: ISingleCrochet): JSX.Element => {
  const { x, y } = position;
  const rotate = `rotate(${rotation})`;
  const halfSize = Math.floor(size / 2);
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
    <SingleCrochetContainer
      x={x}
      y={y}
      width={box.max.x}
      height={box.max.y}
      {...theme}
    >
      <SingleCrochetGroup
        id={`render-item-sc--1`}
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
          y1={box.min.y}
          x2={center.x}
          y2={box.max.y}
        />
      </SingleCrochetGroup>
    </SingleCrochetContainer>
  );
};
