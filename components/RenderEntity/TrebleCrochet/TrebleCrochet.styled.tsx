import styled from "@emotion/styled";

export const TrebleCrochetContainer = styled.svg(
  (props: any) => ({
    stroke: props.color,
    cursor: "pointer",
  })
);

export const TrebleCrochetGroup = styled.g(
  (props: any) => ({
    strokeWidth: props.strokeWidth,
  })
);

export const TrebleCrochetBars = styled.g(
  (props: any) => ({
    transformOrigin: "center",
    transformBox: "fill-box",
  })
);
