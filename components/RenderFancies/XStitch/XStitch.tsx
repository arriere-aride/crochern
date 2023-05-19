import { type XStitch as IXStitch } from "./XStitch.d";
import { XStitchList } from "./XStitch.data";
import { XStitchSvg } from "./XStitch.styled";

/**
 * Render X Stitch
 * (point X)
 */
export const XStitch = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
    backgroundColor: "transparent",
  },
  position = { x: 0, y: 0 },
  size = 16,
  padding = 1,
}: IXStitch): JSX.Element => {
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
  const xStitchList = XStitchList({
    box,
    padding,
    strokeWidth,
    center,
  });

  return (
    <XStitchSvg
      id={`render-item-ys-box--1`}
      {...theme}
    >
      {xStitchList.map(
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
      />
      <circle
        cx={center.x + strokeWidth}
        cy={box.min.y}
        r={padding}
        fill={theme.backgroundColor}
      />
    </XStitchSvg>
  );
};
