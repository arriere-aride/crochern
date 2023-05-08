import { DoubleCrochet } from "@@/components/RenderEntity";
import { type RepeatDoubleCrochetTogether as IRepeatDoubleCrochetTogether } from "./RepeatDoubleCrochetTogether.d";
import { DoubleCrochetGroup } from "./RepeatDoubleCrochetTogether.styled";

/** Render {repeat} Double Crochet Together  (
 * {repeat} Brides écoulées ensemble) */
export const RepeatDoubleCrochetTogether = ({
  theme = {
    fillColor: "#1a1a1a",
    strokeWidth: 2,
  },
  position = { x: 50, y: 50 },
  size = 16,
  repeat = 3,
  padding = 2,
}: IRepeatDoubleCrochetTogether) => {
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const tierceSize = Math.floor(size / 3);
  const quarterSize = Math.floor(size / 4);
  const doubleCrochetList = [
    {
      x: x + padding,
      y,
      rotate: `rotate(${115})`,
    },
    {
      x: x - quarterSize,
      y: y + tierceSize,
      rotate: `rotate(180)`,
    },
    {
      x: x - halfSize - padding,
      y,
      rotate: `rotate(-${115})`,
    },
  ];
  return (
    <g>
      {doubleCrochetList.map(
        (props: any, index: number) => (
          <svg
            x={props.x}
            y={props.y}
            key={index}
          >
            <DoubleCrochetGroup
              key={`item-dcoc-${index}`}
              transform={props.rotate}
              {...theme}
            >
              <DoubleCrochet
                size={16}
                rotation={15}
              />
            </DoubleCrochetGroup>
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
