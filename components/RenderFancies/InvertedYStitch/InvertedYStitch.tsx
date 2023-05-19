import { type InvertedYStitch as IInvertedYStitch } from "./InvertedYStitch.d";
import { InvertedYStitchList } from "./InvertedYStitch.data";
import { InvertedYStitchSvg } from "./InvertedYStitch.styled";

/**
 * Render Y Stitch
 * (point Y)
 */
export const InvertedYStitch = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
    backgroundColor: "transparent",
  },
  position = { x: 0, y: 0 },
  size = 16,
  padding = 1,
}: IInvertedYStitch): JSX.Element => {
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const center = {
    x: x + halfSize,
    y: y + halfSize,
  };
  const strokeWidth = theme.strokeWidth ?? 2;
  const box = {
    min: { x: x + padding, y: y + padding },
    max: {
      x: center.x + halfSize - padding,
      y: center.y + halfSize - padding,
    },
  };
  const invertedYStitchList = InvertedYStitchList(
    {
      box,
      padding,
      strokeWidth,
      center,
    }
  );

  return (
    <InvertedYStitchSvg
      id={`render-item-iys-box--1`}
      {...theme}
    >
      {invertedYStitchList.map(
        (
          { pathD, rotate }: any,
          index: number
        ) => (
          <g
            key={index}
            id={`render-item-iys--${index}`}
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
    </InvertedYStitchSvg>
  );
};
