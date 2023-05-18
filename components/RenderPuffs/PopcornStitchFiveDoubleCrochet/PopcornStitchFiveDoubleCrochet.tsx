import { type PopcornStitchFiveDoubleCrochet as IPopcornStitchFiveDoubleCrochet } from "./PopcornStitchFiveDoubleCrochet.d";
import { PopcornStitchFiveDoubleCrochetContainer } from "./PopcornStitchFiveDoubleCrochet.styled";

export const PopcornStitchFiveDoubleCrochet = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
    backgroundColor: "transparent",
  },
  position = { x: 0, y: 0 },
  size = 16,
  padding = 1,
}: IPopcornStitchFiveDoubleCrochet): JSX.Element => {
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const quarterSize = Math.floor(size / 4);
  const fifthSize = Math.floor(size / 5);
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
    <PopcornStitchFiveDoubleCrochetContainer
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
        d={`M ${box.min.x} ${box.min.y} Q ${
          center.x
        } ${box.min.y + quarterSize} ${
          box.max.x
        } ${box.min.y}`}
        fill={theme.backgroundColor}
        stroke={theme.color}
        strokeWidth={theme.strokeWidth}
      />
      <path
        d={`M ${box.min.x} ${center.y} H ${
          box.min.x + sixthSize
        } `}
      />
      <path
        d={`M ${box.max.x} ${center.y} H ${
          box.max.x - sixthSize
        } `}
      />
      <path
        d={`M ${center.x - padding} ${
          center.y
        } H ${center.x - fifthSize} `}
      />
      <path
        d={`M ${center.x + padding} ${
          center.y
        } H ${center.x + fifthSize} `}
      />
      <path
        d={`M ${center.x} ${box.min.y} V ${box.max.y}`}
      />
    </PopcornStitchFiveDoubleCrochetContainer>
  );
};
