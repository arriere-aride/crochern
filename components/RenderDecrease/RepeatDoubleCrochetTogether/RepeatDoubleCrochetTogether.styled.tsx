import styled from "@emotion/styled";

export const DoubleCrochetGroup = styled.g(
  (props: any) => ({
    fillColor: props.fillColor,
    strokeWidth: props.strokeWidth,
    transformOrigin: "center",
    transformBox: "fill-box",
  })
);
