import { type HalfDoubleCrochet as IHalfDoubleCrochet } from "./HalfDoubleCrochet.d";
import {
  HalfDoubleCrochetContainer,
  HalfDoubleCrochetGroup,
} from "./HalfDoubleCrochet.styled";

/** Render Half double crochet (demi-bride) */
export const HalfDoubleCrochet = ({
  position = { x: 0, y: 0 },
  size = 16,
  padding = 1,
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
    backgroundColor: "transparent",
  },
}: IHalfDoubleCrochet) => {
  const id: string = Math.floor(
    Math.random() * 100
  ).toString();
  const { x, y } = position;
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
    <HalfDoubleCrochetContainer
      x={x}
      y={y}
      width={box.max.x}
      height={box.max.y}
      {...theme}
    >
      <HalfDoubleCrochetGroup
        id={`render-item-hdc--${id}`}
        {...theme}
      >
        <line
          stroke={theme.color}
          x1={center.x}
          y1={box.max.y}
          x2={center.x}
          y2={box.min.y}
        />
        <line
          stroke={theme.color}
          x1={box.min.x}
          y1={box.min.y}
          x2={box.max.x}
          y2={box.min.y}
        />
      </HalfDoubleCrochetGroup>
    </HalfDoubleCrochetContainer>
  );
};
