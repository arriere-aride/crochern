import { type DoubleCrochet as IDoubleCrochet } from "./DoubleCrochet.d";
import { DoubleCrochetContainer } from "./DoubleCrochet.styled";

/** Render Double crochet (bride) */
export const DoubleCrochet = ({
  position = { x: 0, y: 0 },
  size = 16,
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
    backgroundColor: "transparent",
  },
  rotation = 0,
  padding = 1,
}: IDoubleCrochet) => {
  const id: string = Math.floor(
    Math.random() * 100
  ).toString();
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const fifthSize = Math.floor(size / 5);
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
    <DoubleCrochetContainer
      x={x}
      y={y}
      width={box.max.x}
      height={box.max.y}
      {...theme}
    >
      <g
        id={`render-item-dc--${id}`}
        strokeWidth={theme.strokeWidth}
      >
        <line
          strokeWidth={theme.strokeWidth}
          x1={center.x}
          y1={box.max.y}
          x2={center.x}
          y2={box.min.y}
        />
        <line
          strokeWidth={theme.strokeWidth}
          x1={box.min.x}
          y1={box.min.y}
          x2={box.max.x}
          y2={box.min.y}
        />
        <g
          id={`render-item-dc-bar--${id}`}
          transform={rotate}
          style={{
            transformOrigin: "center",
            transformBox: "fill-box",
          }}
        >
          <line
            strokeWidth={theme.strokeWidth}
            x1={center.x - fifthSize}
            x2={center.x + fifthSize}
            y1={center.y}
            y2={center.y}
          />
        </g>
      </g>
    </DoubleCrochetContainer>
  );
};
