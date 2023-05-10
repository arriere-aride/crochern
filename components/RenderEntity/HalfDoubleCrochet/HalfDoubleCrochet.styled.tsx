import styled from "@emotion/styled";

export const HalfDoubleCrochetContainer =
  styled.svg((props: any) => ({
    stroke: `${props.color}`,
    cursor: "pointer",
  }));
export const HalfDoubleCrochetGroup = styled.g(
  (props: any) => ({
    strokeWidth: `${props.strokeWidth}`,
    stroke: `${props.color}`,
  })
);
