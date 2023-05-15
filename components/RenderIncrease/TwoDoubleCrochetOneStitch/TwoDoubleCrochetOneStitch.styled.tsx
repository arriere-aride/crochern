import styled from "@emotion/styled";

export const TwoDoubleCrochetOneStitchContainer =
  styled.g((props: any) => ({
    stroke: `${props.color}`,
    strokeWidth: `${props.strokeWidth}px`,
    fill: `${props.backgroundColor}`,
  }));
