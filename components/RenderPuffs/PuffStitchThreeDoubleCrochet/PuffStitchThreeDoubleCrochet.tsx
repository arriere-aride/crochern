import { type PuffStitchThreeDoubleCrochet as IPuffStitchThreeDoubleCrochet } from "./PuffStitchThreeDoubleCrochet.d";
import { PuffStitchThreeDoubleCrochetContainer } from "./PuffStitchThreeDoubleCrochet.styled";

export const PuffStitchThreeDoubleCrochet = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
    backgroundColor: "transparent",
  },
  position = { x: 0, y: 0 },
  size = 16,
  padding = 1,
}: IPuffStitchThreeDoubleCrochet): JSX.Element => {
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
    <PuffStitchThreeDoubleCrochetContainer
      x={x}
      y={y}
      {...theme}
    >
      <path
        d={`M ${center.x} ${box.min.y} ${center.x} ${box.max.y}`}
      />
      <circle
        cx={center.x}
        cy={center.y}
        fill={theme.backgroundColor}
        r={r}
      />
    </PuffStitchThreeDoubleCrochetContainer>
  );
};
