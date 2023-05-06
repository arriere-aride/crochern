import styled from "@emotion/styled";

interface ColoredSvg {
  strokeWidth: number;
  strokeColor: string;
  fillColor: number;
}

export const ShadowBoxRenderSvg = ({
  theme,
}: {
  theme: {
    svg: ColoredSvg;
  };
}) => styled.svg`
  border: ${theme?.svg.strokeWidth}px solid
    ${theme?.svg.strokeColor};
  background-color: ${theme?.svg.fillColor};
`;
export const ShadowBoxRenderContainer = ({
  currentPosition,
  size,
}: {
  currentPosition: { x: number; y: number };
  size: number;
}) => styled.div`
  position: absolute;
  top: ${currentPosition.y}px;
  left: ${currentPosition.x}px;
  width: ${size}px;
  height: ${size}px;
`;

export const ShadowBoxRenderDocument = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
