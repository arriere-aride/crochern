import styled from "@emotion/styled";

export const HalfDoubleCrochetContainer =
  styled.svg((props: any) => ({
    stroke: `${props.fillColor}`,
    cursor: "pointer",
  }));
export const HalfDoubleCrochetGroup = styled.g(
  (props: any) => ({
    stroke: `${props.fillColor}`,
  })
);
