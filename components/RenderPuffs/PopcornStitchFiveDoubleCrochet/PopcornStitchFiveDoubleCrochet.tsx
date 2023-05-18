import { type PopcornStitchFiveDoubleCrochet as IPopcornStitchFiveDoubleCrochet } from "./PopcornStitchFiveDoubleCrochet.d";
import { PopcornStitchFiveDoubleCrochetList } from "./PopcornStitchFiveDoubleCrochet.data";
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
  const sizes = {
    quarterSize: Math.floor(size / 4),
    fifthSize: Math.floor(size / 5),
    sixthSize: Math.floor(size / 6),
  };
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
  const popcornStitchList =
    PopcornStitchFiveDoubleCrochetList({
      box,
      sizes,
      center,
      padding,
    });
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
      {popcornStitchList.map(
        (
          { pathD, rotate }: any,
          index: number
        ) => (
          <g
            key={index}
            id={`render-item-rdct--${index}`}
            transform={rotate ?? ""}
            style={{
              transformOrigin: "center",
              transformBox: "fill-box",
            }}
          >
            <path d={pathD} />
          </g>
        )
      )}
    </PopcornStitchFiveDoubleCrochetContainer>
  );
};
