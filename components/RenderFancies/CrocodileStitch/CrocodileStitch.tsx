import { type CrocodileStitch as ICrocodileStitch } from "./CrocodileStitch.d";
import { CrocodileStitchList } from "./CrocodileStitch.data";
import { CrocodileStitchSvg } from "./CrocodileStitch.styled";

export const CrocodileStitch = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
    backgroundColor: "transparent",
  },
  position = { x: 0, y: 0 },
  size = 16,
  padding = 1,
}: ICrocodileStitch): JSX.Element => {
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
  const crocodileStitchList = CrocodileStitchList(
    {
      box,
      padding,
      strokeWidth,
      center,
    }
  );
  return (
    <CrocodileStitchSvg
      id={`render-item-cs-box--1`}
      {...theme}
    >
      {crocodileStitchList.map(
        (
          { pathD, rotate, fill }: any,
          index: number
        ) => (
          <g
            key={index}
            id={`render-item-cs--${index}`}
            transform={rotate ?? ""}
          >
            <path d={pathD} fill={fill ?? ""} />
          </g>
        )
      )}
    </CrocodileStitchSvg>
  );
};
