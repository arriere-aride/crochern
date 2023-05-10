import styled from "@emotion/styled";

export const SlipSnitchContainer = styled.svg(
  (props: any) => ({
    stroke: `${props.color}`,
    fill: `${props.color}`,
  })
);
export const SlipSnitchGroup = styled.g(
  (props: any) => ({
    strokeWidth: `${props.strokeWidth}`,
  })
);
