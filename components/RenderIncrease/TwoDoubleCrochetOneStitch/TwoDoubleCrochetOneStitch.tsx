import { type TwoDoubleCrochetOneStitch as ITwoDoubleCrochetOneStitch } from "./TwoDoubleCrochetOneStitch.d";
import { TwoDoubleCrochetOneStitchData } from "./TwoDoubleCrochetOneStitch.data";
import { TwoDoubleCrochetOneStitchContainer } from "./TwoDoubleCrochetOneStitch.styled";

/** Render Two Double Crochet in One Stitch
 *  (2 Brides dans la même Maille) */
export const TwoDoubleCrochetOneStitch = ({
  theme = {
    color: "#1a1a1a",
    backgroundColor: "transparent",
    strokeWidth: 2,
  },
  position = { x: 0, y: 0 },
  padding = 1,
  size = 16,
}: ITwoDoubleCrochetOneStitch) => {
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
  const doubleCrochetBarList =
    TwoDoubleCrochetOneStitchData({
      box,
      center,
      sizes: { halfSize, tierceSize, sixthSize },
      theme: { strokeWidth },
    });

  return (
    <TwoDoubleCrochetOneStitchContainer
      id={`render-item-tdcos--box-1`}
      {...theme}
    >
      {doubleCrochetBarList.map(
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
    </TwoDoubleCrochetOneStitchContainer>
  );
};
