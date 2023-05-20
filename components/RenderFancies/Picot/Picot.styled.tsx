import styled from "@emotion/styled";

export const PicotSvg = styled.svg(
  (props: any) => ({
    stroke: `${props.color}`,
    strokeWidth: `${props.strokeWidth}`,
  })
);
