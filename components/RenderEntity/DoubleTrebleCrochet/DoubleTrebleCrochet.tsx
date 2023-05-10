import { type DoubleTrebleCrochet as IDoubleTrebleCrochet } from "./DoubleTrebleCrochet.d";
import {
  DoubleTrebleCrochetContainer,
  DoubleTrebleCrochetGroup,
} from "./DoubleTrebleCrochet.styled";
import { DoubleTrebleCrochetBars } from "./DoubleTrebleCrochetBars";

/** Render Double treble crochet (Triple bride) */
export const DoubleTrebleCrochet = ({
  position = { x: 0, y: 0 },
  size = 16,
  rotation = 0,
  padding = 1,
  theme = {
    strokeWidth: 2,
    color: "#1a1a1a",
    backgroundColor: "#7F7F80",
  },
  middlePadding = 4,
}: IDoubleTrebleCrochet) => {
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const fifthSize = Math.floor(size / 5);
  const middleBarSize = Math.floor(middlePadding);
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
  const Bars = DoubleTrebleCrochetBars({
    center,
    box,
    fifthSize,
    middleBarSize,
  });

  return (
    <DoubleTrebleCrochetContainer
      x={x}
      y={y}
      width={box.max.x}
      height={box.max.y}
    >
      <DoubleTrebleCrochetGroup
        id={`render-item-dtc--1`}
        {...theme}
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
        <DoubleTrebleCrochetGroup
          id={`render-item-dtc-bar--2`}
          transform={rotate}
          style={{
            transformOrigin: "center",
            transformBox: "fill-box",
          }}
          {...theme}
        >
          {Bars.map((bar: any, index: number) => (
            <line key={index} {...bar} />
          ))}
        </DoubleTrebleCrochetGroup>
      </DoubleTrebleCrochetGroup>
    </DoubleTrebleCrochetContainer>
  );
};
