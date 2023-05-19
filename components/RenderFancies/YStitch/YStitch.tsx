import { type YStitch as IYStitch } from "./YStitch.d";
import { YStitchList } from "./YStitch.data";
import { YStitchSvg } from "./YStitch.styled";

/**
 * Render Y Stitch
 * (point Y)
 */
export const YStitch = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
    backgroundColor: "transparent",
  },
  position = { x: 0, y: 0 },
  size = 16,
  padding = 1,
}: IYStitch): JSX.Element => {
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
  const yStitchList = YStitchList({
    box,
    padding,
    strokeWidth,
    center,
  });

  return (
    <YStitchSvg
      id={`render-item-ys-box--1`}
      {...theme}
    >
      {yStitchList.map(
        (
          { pathD, rotate }: any,
          index: number
        ) => (
          <g
            key={index}
            id={`render-item-ss--${index}`}
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
      <circle
        cx={center.x - strokeWidth}
        cy={box.min.y}
        r={padding}
        fill={theme.backgroundColor}
      />{" "}
      <circle
        cx={center.x + strokeWidth}
        cy={box.min.y}
        r={padding}
        fill={theme.backgroundColor}
      />
    </YStitchSvg>
  );
};
