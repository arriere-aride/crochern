export const RepeatText = ({
  repeat,
  circle,
  text,
}: {
  repeat: number;
  circle: { x: number; y: number };
  text: { x: number; y: number };
}) =>
  repeat >= 4 ? (
    <svg x={0} y={0}>
      <circle
        r={6}
        cx={circle.x}
        cy={circle.y}
        fill={"#1a1a1a"}
        stroke={"white"}
        strokeWidth={0.5}
      />
      <text
        x={text.x}
        y={text.y}
        fontSize={"12px"}
        fill={"#ffffff"}
        stroke={"transparent"}
      >
        {repeat}
      </text>
    </svg>
  ) : (
    <></>
  );
