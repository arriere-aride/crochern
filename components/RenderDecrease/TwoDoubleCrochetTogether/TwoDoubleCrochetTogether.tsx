import { TwoDoubleCrochetTogether as ITwoDoubleCrochetTogether } from "./TwoDoubleCrochetTogether.d";
import { TwoDoubleCrochetTogetherList } from "./TwoDoubleCrochetTogether.data";
import { TwoDoubleCrochetTogetherContainer } from "./TwoDoubleCrochetTogether.styled";

/** Render Two Double Crochet Together  (2 Brides écoulées ensemble) */
export const TwoDoubleCrochetTogether = ({
  theme = { color: "#1a1a1a", strokeWidth: 2 },
  position = { x: 0, y: 0 },
  size = 16,
  padding = 1,
}: ITwoDoubleCrochetTogether) => {
  const { x, y } = position;
  const strokeWidth = theme.strokeWidth || 2;
  const halfSize = Math.floor(size / 2);
  const tierceSize = Math.floor(size / 3);
  const sixthSize = Math.floor(size / 6);
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
  const twoDoubleCrochetTogether =
    TwoDoubleCrochetTogetherList({
      box,
      center,
      sizes: { halfSize, tierceSize, sixthSize },
      theme: { strokeWidth },
    });

  return (
    <TwoDoubleCrochetTogetherContainer
      id={`render-item-tdcos--box-1`}
      x={x}
      y={y}
      {...theme}
    >
      {twoDoubleCrochetTogether.map(
        (
          { pathD, rotate }: any,
          index: number
        ) => (
          <g
            key={index}
            id={`render-item-tdcos--${index}`}
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
    </TwoDoubleCrochetTogetherContainer>
  );
};
