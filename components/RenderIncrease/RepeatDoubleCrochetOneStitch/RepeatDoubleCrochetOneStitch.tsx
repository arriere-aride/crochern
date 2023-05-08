import { DoubleCrochet } from "@@/components/RenderEntity";
import { RepeatDoubleCrochetOneStitch as IRepeatDoubleCrochetOneStitch } from "./RepeatDoubleCrochetOneStitch.d";

/** Render {repeat} Double Crochet in One Stitch
 * ({repeat} Brides dans la même Maille)
 */
export const RepeatDoubleCrochetOneStitch = ({
  theme = {
    fillColor: "#1a1a1a",
    strokeWidth: 2,
  },
  position = { x: 50, y: 50 },
  size = 16,
  repeat = 3,
  padding = 2,
}: IRepeatDoubleCrochetOneStitch) => {
  const { x, y } = position;

  const halfSize = Math.floor(size / 2);
  const quarterSize = Math.floor(size / 4);

  const RepeatDoubleCrochetList = [
    {
      rotate: `rotate(${65})`,
      x: x + padding,
      y,
    },
    {
      rotate: `rotate(0)`,
      x: x - quarterSize,
      y: y - quarterSize,
    },
    {
      rotate: `rotate(-${65})`,
      x: x - halfSize - padding,
      y,
    },
  ];
  return (
    <g>
      {RepeatDoubleCrochetList.map(
        (
          { rotate, x, y }: any,
          index: number
        ) => (
          <svg x={x} y={y} key={index}>
            <g
              key={`render-item-dcoc${index}`}
              {...theme}
              transform={rotate}
              style={{
                transformOrigin: "center",
                transformBox: "fill-box",
              }}
            >
              <DoubleCrochet
                size={16}
                rotation={15}
              />
            </g>
          </svg>
        )
      )}

      {repeat >= 4 && (
        <svg x={x - quarterSize} y={y - halfSize}>
          <circle
            r={repeat < 10 ? 8 : 10}
            cx={50}
            cy={48}
            fill={"#1a1a1a"}
            stroke="white"
            strokeWidth={1}
          />
          <text
            x={repeat < 10 ? 47 : 43}
            y={52}
            fontSize="12px"
            fill="white"
          >
            {repeat}
          </text>
        </svg>
      )}
    </g>
  );
};
