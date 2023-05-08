import {
  RenderShadowBox,
  RenderSnapBox,
} from "@/components";
import { SelectMemoryEntity } from "@/selectors";
import { InMemoryEntity } from "@/stores/EntityMoveReducer";
import { Fragment } from "react";
import { type RenderPreFill as IRenderPreFill } from "./RenderPreFill.d";

export const RenderPreFill = ({
  grid = null,
  OnStashBoxRenderClick = () => true,
}: IRenderPreFill) => {
  const hasStash: boolean =
    SelectMemoryEntity().length > 0;
  const current: InMemoryEntity =
    SelectMemoryEntity()[0];
  if (current && grid) {
    return (
      <Fragment>
        <RenderShadowBox
          active={
            hasStash && current.entity != null
          }
          currentEntity={current}
          grid={grid}
          onDocumentClick={OnStashBoxRenderClick}
        />
        {grid != null && (
          <RenderSnapBox grid={grid} />
        )}
      </Fragment>
    );
  }
  return <></>;
};
