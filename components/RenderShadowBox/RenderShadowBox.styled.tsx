import styled from "@emotion/styled";

export const ShadowBoxRenderSvg = styled.svg(
  (props: any) => ({
    border: `${props.svg.strokeWidth}px 
  solid
  ${props.svg.strokeColor}`,
    backgroundColor: `${props.svg.fillColor}`,
  })
);

export const ShadowBoxRenderContainer =
  styled.div((props: any) => ({
    position: "absolute",
    top: `${props.currentPosition.y}px`,
    left: `${props.currentPosition.x}px`,
    width: `${props.size}px`,
    height: `${props.size}px`,
  }));

export const ShadowBoxRenderDocument = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
