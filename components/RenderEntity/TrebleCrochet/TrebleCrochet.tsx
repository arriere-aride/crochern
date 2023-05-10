import { type TrebleCrochet as ITrebleCrochet } from "./TrebleCrochet.d";
import {
  TrebleCrochetBars,
  TrebleCrochetContainer,
  TrebleCrochetGroup,
} from "./TrebleCrochet.styled";

/** Render Treble crochet (Double bride) */
export const TrebleCrochet = ({
  position = { x: 0, y: 0 },
  size = 16,
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
  },
  rotation = 0,
  padding = 1,
  middlePadding = 8,
}: ITrebleCrochet) => {
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const fifthSize = Math.floor(size / 5);
  const middleBarSize = Math.floor(
    size / middlePadding
  );
  const rotate = `rotate(${rotation})`;
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
    <TrebleCrochetContainer
      {...theme}
      x={x}
      y={y}
      width={box.max.x}
      height={box.max.y}
    >
      <TrebleCrochetGroup
        id={`render-item-tc--1`}
      >
        <line
          x1={center.x}
          y1={box.max.y}
          x2={center.x}
          y2={box.min.y}
        />
        <line
          x1={box.min.x}
          y1={box.min.y}
          x2={box.max.x}
          y2={box.min.y}
        />
        <TrebleCrochetBars
          id={`render-item-tc-bar--2`}
          transform={rotate}
        >
          <line
            x1={center.x - fifthSize}
            x2={center.x + fifthSize}
            y1={center.y + middleBarSize}
            y2={center.y + middleBarSize}
          />
          <line
            x1={center.x - fifthSize}
            x2={center.x + fifthSize}
            y1={center.y - middleBarSize}
            y2={center.y - middleBarSize}
          />
        </TrebleCrochetBars>
      </TrebleCrochetGroup>
    </TrebleCrochetContainer>
  );
};
