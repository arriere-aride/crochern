import styled from "@emotion/styled";

export const YStitchSvg = styled.svg(
  (props: any) => ({
    stroke: `${props.color}`,
    strokeWidth: `${props.strokeWidth}`,
  })
);
