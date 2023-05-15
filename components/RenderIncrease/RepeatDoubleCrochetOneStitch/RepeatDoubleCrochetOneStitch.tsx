import { RepeatDoubleCrochetOneStitch as IRepeatDoubleCrochetOneStitch } from "./RepeatDoubleCrochetOneStitch.d";
import { RepeatDoubleCrochetOneStitchList } from "./RepeatDoubleCrochetOneStitch.data";
import { RepeatDoubleCrochetOneStitchContainer } from "./RepeatDoubleCrochetOneStitch.styled";
import { RepeatText } from "./RepeatText";

/** Render {repeat} Double Crochet in One Stitch
 * ({repeat} Brides dans la même Maille)
 */
export const RepeatDoubleCrochetOneStitch = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
    backgroundColor: "transparent",
  },
  position = { x: 0, y: 0 },
  size = 16,
  repeat = 3,
  padding = 1,
}: IRepeatDoubleCrochetOneStitch) => {
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const quarterSize = Math.floor(size / 4);
  const fifthSize = Math.floor(size / 5);
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
  const RepeatDoubleCrochetList =
    RepeatDoubleCrochetOneStitchList({
      box,
      sizes: {
        quarterSize,
        fifthSize,
        sixthSize,
      },
      padding,
      center,
    });

  return (
    <RepeatDoubleCrochetOneStitchContainer
      {...theme}
    >
      {RepeatDoubleCrochetList.map(
        (
          { pathD, rotate }: any,
          index: number
        ) => (
          <g
            key={index}
            id={`render-item-rdcos-${index}`}
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
          x: box.min.x + quarterSize,
          y: center.y + quarterSize,
        }}
        repeat={repeat}
      />
    </RepeatDoubleCrochetOneStitchContainer>
  );
};
