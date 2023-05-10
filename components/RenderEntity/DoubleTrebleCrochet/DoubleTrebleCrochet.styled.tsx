import styled from "@emotion/styled";

export const DoubleTrebleCrochetContainer =
  styled.svg((props: any) => ({
    cursor: "pointer",
    stroke: `${props.fillColor}`,
  }));

export const DoubleTrebleCrochetGroup = styled.g(
  (props: any) => ({
    stroke: `${props.color}`,
    fillColor: `${props.backgroundColor}`,
  })
);
