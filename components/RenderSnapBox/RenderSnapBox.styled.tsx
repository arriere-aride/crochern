import styled from "@emotion/styled";

export const SnapBoxDocument = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const SnapBoxRenderContainer = styled.div(
  (props: any) => ({
    position: "absolute",
    top: `${props.currentPosition.y}px`,
    left: `${props.currentPosition.x}px`,
    width: `${props.size}px`,
    height: `${props.size}px`,
  })
);
export const SnapBoxSvgContainer = styled.svg(
  (props: any) => ({
    x: 0,
    y: 0,
    width: props.size,
    height: props.size,
  })
);
export const SnapBoxRect = styled.rect(
  (props: any) => ({
    x: 0,
    y: 0,
    width: props.size,
    height: props.size,
    stroke: props.strokeColor,
    fill: props.fillColor,
    strokeWidth: props.strokeWidth,
  })
);
