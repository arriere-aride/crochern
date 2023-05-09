import { Store } from "@/stores";
import { TargetEntity } from "@/stores/EntityMoveReducer";
import React from "react";
import { useSelector } from "react-redux";
import { RenderBox } from "../RenderBox/RenderBox";

export interface RenderTargetBox {
  targets: TargetEntity[];
  onTargetEntityClick?: (values: any) => any;
}
export const RenderTargetBox = ({
  targets,
  onTargetEntityClick,
}: RenderTargetBox) => {
  const selected = useSelector(
    (state: Store) => state.selection.selection[0]
  );
  return (
    <g>
      {targets?.length > 0 &&
        targets.map(
          ({ _id, entity, position }: any) => {
            return React.Children.map(
              entity,
              (child) => (
                <svg
                  x={position.x}
                  y={position.y}
                  onClick={() => {
                    onTargetEntityClick &&
                      onTargetEntityClick({
                        id: _id,
                        targets,
                      });
                  }}
                >
                  {selected != null &&
                  _id == selected._id ? (
                    <RenderBox entity={entity} />
                  ) : (
                    React.cloneElement(child)
                  )}
                </svg>
              )
            );
          }
        )}
    </g>
  );
};
