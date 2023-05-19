import styled from "@emotion/styled";

export const XStitchSvg = styled.svg(
  (props: any) => ({
    stroke: `${props.color}`,
    strokeWidth: `${props.strokeWidth}`,
  })
);
