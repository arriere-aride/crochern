import styled from "@emotion/styled";

export const SlipSnitchContainer = styled.svg(
  (props: any) => ({
    stroke: `${props.strokeColor}`,
    fill: `${props.fillColor}`,
  })
);
