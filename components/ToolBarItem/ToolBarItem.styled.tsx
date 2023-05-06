import styled from "@emotion/styled";

interface Anchor {
  size: number;
  padding: number;
}

export const Anchor = ({
  size,
  padding,
}: Anchor) => styled.a`
  display: inline-flex;
  height: ${cellSize({ size, padding })};
  cursor: pointer;
  padding: ${padding}px;
  &:hover svg svg * {
    fill: #f0df87;
    stroke: #f0df87;
  }
`;

interface CellSize {
  size: number;
  padding: number;
}
export const cellSize = ({
  size,
  padding,
}: CellSize): string => `${size + padding}px`;
