import styled from "@emotion/styled";

export const ChainContainer = styled.svg(
  (props: any) => ({
    stroke: `${props.backgroundColor}`,
    fill: `${props.color}`,
  })
);
