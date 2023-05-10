import styled from "@emotion/styled";

export const SingleCrochetContainer = styled.svg(
  (props: any) => ({
    stroke: `${props.color}`,
    cursor: "pointer",
  })
);

export const SingleCrochetGroup = styled.g(
  (props: any) => ({
    transformOrigin: "center",
    transformBox: "fill-box",
    strokeWidth: `${props.strokeWidth}px`,
  })
);
