import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { RiLoader3Fill } from "react-icons/ri";

const spinning = keyframes`
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
}
`;

const Spin = styled.div((props: any) => ({
  animation: `${spinning}`,
  animationDuration: `${props.speed}`,
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
  display: `inline-block`,
  width: `${props.size}`,
  height: `${props.size}`,
  backgroundColor: `${props.backgroundColor}`,
}));

export const Loading = ({
  backgroundColor = "transparent",
  fillColor = "#1a1a1a",
  size = "1em",
}: {
  backgroundColor?: string;
  fillColor?: string;
  size?: string;
}) => {
  return (
    <Spin
      speed={"1s"}
      backgroundColor={backgroundColor}
      size={size}
    >
      <RiLoader3Fill
        style={{ fill: fillColor }}
        width={size}
        height={size}
      />
    </Spin>
  );
};
