import styled from "@emotion/styled";

export const RepeatDoubleCrochetOneStitchContainer =
  styled.svg((props: any) => ({
    stroke: `${props.color}`,
    strokeWidth: `${props.strokeWidth}px`,
    fill: `${props.backgroundColor}`,
  }));
