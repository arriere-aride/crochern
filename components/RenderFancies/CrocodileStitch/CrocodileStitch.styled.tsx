import styled from "@emotion/styled";

export const CrocodileStitchSvg = styled.svg(
  (props: any) => ({
    stroke: `${props.color}`,
    strokeWidth: `${props.strokeWidth}`,
  })
);
