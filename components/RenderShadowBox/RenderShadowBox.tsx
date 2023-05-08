import { AABB } from "@/validators";
import React from "react";
import { type RenderShadowBox as IRenderShadowBox } from "./RenderShadowBox.d";
import {
  ShadowBoxRenderContainer,
  ShadowBoxRenderDocument,
  ShadowBoxRenderSvg,
} from "./RenderShadowBox.styled";

/** Render entity on the grid before click. */
export const RenderShadowBox = ({
  size = 20,
  theme = {
    container: {
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
  currentPosition,
  currentEntity,
  grid,

  onDocumentClick,
}: IRenderShadowBox): JSX.Element => {
  const hideBox =
    grid != null && !AABB(currentPosition, grid);

  if (hideBox) {
    return <></>;
  }

  const [x, y] = [
    grid
      ? currentPosition.x - grid.left
      : currentPosition.x,
    grid
      ? currentPosition.y - grid.top
      : currentPosition.y,
  ];
  const Container = ShadowBoxRenderContainer({
    currentPosition,
    size,
  });
  const SvgContainer = ShadowBoxRenderSvg({
    theme,
  });

  return (
    <ShadowBoxRenderDocument
      onClick={(e) =>
        onDocumentClick &&
        onDocumentClick({
          e,
          position: { x, y },
        })
      }
    >
      <Container>
        <SvgContainer>
          {React.Children.map(
            currentEntity.entity,
            (child) => {
              return React.cloneElement(
                child as any,
                { ...theme.entity }
              );
            }
          )}
        </SvgContainer>
      </Container>
    </ShadowBoxRenderDocument>
  );
};
