import { RepeatText } from "@/components/RenderIncrease/RepeatDoubleCrochetOneStitch/RepeatText";
import { type RepeatDoubleCrochetTogether as IRepeatDoubleCrochetTogether } from "./RepeatDoubleCrochetTogether.d";
import { RepeatDoubleCrochetList } from "./RepeatDoubleCrochetTogether.data";
import { RepeatDoubleCrochetTogetherContainer } from "./RepeatDoubleCrochetTogether.styled";

/** Render {repeat} Double Crochet Together  (
 * {repeat} Brides écoulées ensemble) */
export const RepeatDoubleCrochetTogether = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
  },
  position = { x: 0, y: 0 },
  size = 16,
  repeat = 3,
  padding = 1,
}: IRepeatDoubleCrochetTogether) => {
  const { x, y } = position;
  const strokeWidth = theme.strokeWidth || 2;
  const sizes = {
    halfSize: Math.floor(size / 2),
    tierceSize: Math.floor(size / 3),
    quarterSize: Math.floor(size / 4),
    fifthSize: Math.floor(size / 5),
    sixthSize: Math.floor(size / 6),
  };
  const center = {
    x: x + sizes.halfSize,
    y: y + sizes.halfSize,
  };
  const box = {
    min: { x: x + padding, y: y + padding },
    max: {
      x: center.x + sizes.halfSize - padding,
      y: center.y + sizes.halfSize - padding,
    },
  };

  const repeatDoublecCrochetList =
    RepeatDoubleCrochetList({
      box,
      center,
      sizes,
      theme: { strokeWidth },
    });

  return (
    <RepeatDoubleCrochetTogetherContainer
      x={x}
      y={y}
      {...theme}
      id={`render-item-rdct--container-1`}
    >
      {repeatDoublecCrochetList.map(
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
      <RepeatText
        circle={{ x: center.x, y: center.y }}
        text={{
          x: box.min.x + sizes.quarterSize,
          y: center.y + sizes.quarterSize,
        }}
        repeat={repeat}
      />
    </RepeatDoubleCrochetTogetherContainer>
  );
};
