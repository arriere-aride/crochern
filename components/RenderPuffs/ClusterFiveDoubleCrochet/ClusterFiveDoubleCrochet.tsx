import { type ClusterFiveDoubleCrochet as IClusterFiveDoubleCrochet } from "./ClusterFiveDoubleCrochet.d";
import { ClusterFiveDoubleCrochetContainer } from "./ClusterFiveDoubleCrochet.styled";

export const ClusterFiveDoubleCrochet = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
    backgroundColor: "transparent",
  },
  position = { x: 0, y: 0 },
  size = 16,
  padding = 1,
}: IClusterFiveDoubleCrochet): JSX.Element => {
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const sixthSize = Math.floor(size / 6);
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
    <ClusterFiveDoubleCrochetContainer
      x={x}
      y={y}
      {...theme}
    >
      <ellipse
        cx={center.x}
        cy={center.y}
        rx={Math.trunc(r / 2)}
        ry={r}
        fill={theme.backgroundColor}
      />
      <circle
        cx={center.x}
        cy={center.y}
        fill={theme.backgroundColor}
        r={r}
      />
      <path
        d={`M ${box.min.x + sixthSize} ${
          box.min.y
        } H ${box.max.x - sixthSize}`}
      />
      <path
        d={`M ${center.x} ${box.min.y} ${center.x} ${box.max.y}`}
      />
      <path
        d={`M ${box.min.x} ${center.y} H ${box.max.x}`}
      />
    </ClusterFiveDoubleCrochetContainer>
  );
};
