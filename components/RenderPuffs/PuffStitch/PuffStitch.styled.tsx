import styled from "@emotion/styled";

export const PuffStitchContainer = styled.svg(
  (props: any) => ({
    stroke: `${props.color}`,
    strokeWidth: `${props.strokeWidth}`,
    cursor: "pointer",
  })
);
