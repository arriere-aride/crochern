import styled from "@emotion/styled";
import React from "react";

interface RenderShadowBox {
  /**
   * Box size, will also scale entity inside
   */
  size?: number;
  /**
   * Which theme to apply…
   */
  theme?: {
    /**
     * …on the container
     */
    container: any;
    /**
     * …on svg
     */
    svg: any;
    /**
     * …on entity
     */
    entity: any;
  };
  /**
   * What entity to render
   */
  entity?: React.ReactNode | JSX.Element;
  /**
   * What are grid props
   */
  grid?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  /**
   * Is feacture activated
   */
  active: boolean;
  /**
   * What to do on document click
   */
  onDocumentClick?: (values: any) => any;
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({
        x: ev.clientX - 8,
        y: ev.clientY - 8,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

const AABB = (
  point: { x: number; y: number },
  box: { x: number; y: number; width: number; height: number }
): boolean => {
  const X = point.x >= box.x && point.x <= box.width + box.x;
  const Y = point.y >= box.y && point.y <= box.height + box.y;
  return X && Y;
};

/** Render entity on the grid before click. */
const RenderShadowBox = ({
  size = 20,
  theme = {
    container: {
      strokeWidth: "0",
      strokeColor: "inherit",
      fillColor: "inherit",
    },
    svg: {
      fillColor: "inherit",
      strokeColor: "inherit",
    },
    entity: {
      fillColor: "#565656",
    },
  },
  entity,
  grid,
  active,
  onDocumentClick,
}: RenderShadowBox): JSX.Element => {
  const currentPosition = useMousePosition();

  if (grid != null && AABB(currentPosition, grid) === false) {
    return <></>;
  }
  if (active === false || entity == null) {
    return <></>;
  }

  const StashBoxRenderSvg = styled.svg`
    border: ${theme?.svg.strokeWidth}px solid ${theme?.svg.strokeColor};
    background-color: ${theme?.svg.fillColor};
  `;
  const StashBoxRenderContainer = styled.div`
    position: absolute;
    top: ${currentPosition.y}px;
    left: ${currentPosition.x}px;
    width: ${size}px;
    height: ${size}px;
    border: ${theme?.container.strokeWidth}px solid
      ${theme?.container.strokeColor};
    background-color: ${theme?.container.fillColor};
  `;
  const StashBoxRenderDocument = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  `;

  return (
    <StashBoxRenderDocument onClick={onDocumentClick}>
      <StashBoxRenderContainer>
        <StashBoxRenderSvg>
          {React.Children.map(entity, (child) => {
            return React.cloneElement(child as any, { ...theme.entity });
          })}
        </StashBoxRenderSvg>
      </StashBoxRenderContainer>
    </StashBoxRenderDocument>
  );
};
export { RenderShadowBox };
