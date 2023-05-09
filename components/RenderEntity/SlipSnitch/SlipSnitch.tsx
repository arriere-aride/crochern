import { type SlipSnitch as ISlipSnitch } from "./SlipSnitch.d";
import { SlipSnitchContainer } from "./SlipSnitch.styled";

/** Render Snitch (maille coulée) */
export const SlipSnitch = ({
  theme = {
    fillColor: "#1a1a1a",
    strokeColor: "transparent",
    strokeWidth: 0,
  },
  radius = 8,
  size = 16,
  padding = 0,
  position = { x: 0, y: 0 },
}: ISlipSnitch) => {
  const id: number = Math.floor(
    Math.random() * 100
  );
  const r = Math.floor(radius / 2);
  const halfSize = Math.floor(size / 2);
  const { x, y } = position;
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
    <SlipSnitchContainer
      x={x}
      y={y}
      width={box.max.x}
      height={box.max.y}
      {...theme}
    >
      <g
        id={`render-item-slst--${id}`}
        strokeWidth={theme.strokeWidth}
      >
        <circle
          cx={center.x}
          cy={center.y}
          r={r}
        />
      </g>
    </SlipSnitchContainer>
  );
};
