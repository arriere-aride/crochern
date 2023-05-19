import styled from "@emotion/styled";

export const StarStitchSvg = styled.svg(
  (props: any) => ({
    stroke: `${props.color}`,
    strokeWidth: `${props.strokeWidth}`,
  })
);
