import styled from "@emotion/styled";

export const SingleCrochetCrabStitchContainer =
  styled.svg((props: any) => ({
    stroke: `${props.color}`,
    cursor: "pointer",
  }));

export const SingleCrochetCrabStitchGroup =
  styled.g((props: any) => ({
    transformOrigin: "center",
    transformBox: "fill-box",
    strokeWidth: `${props.strokeWidth}px`,
  }));
