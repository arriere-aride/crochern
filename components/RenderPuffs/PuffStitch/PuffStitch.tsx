import { type PuffStitch as IPuffStitch } from "./PuffStitch.d";
import { PuffStitchContainer } from "./PuffStitch.styled";

export const PuffStitch = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
    backgroundColor: "transparent",
  },
  position = { x: 0, y: 0 },
  size = 16,
  padding = 1,
}: IPuffStitch): JSX.Element => {
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const r = Math.trunc((size - padding) / 2);
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
    <PuffStitchContainer x={x} y={y} {...theme}>
      <path
        d={`M ${center.x} ${box.min.y} ${center.x} ${box.max.y}`}
      />
      <circle
        cx={center.x}
        cy={center.y}
        fill={theme.backgroundColor}
        r={r}
      />
    </PuffStitchContainer>
  );
};
