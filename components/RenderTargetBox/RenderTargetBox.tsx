import { TargetEntity } from "@/stores/EntityMoveReducer";
import React from "react";

export interface RenderTargetBox {
  targets: TargetEntity[];
  onTargetEntityClick?: (values: any) => any;
}
export const RenderTargetBox = ({
  targets,
  onTargetEntityClick,
}: RenderTargetBox) => {
  return (
    <g>
      {targets?.length > 0 &&
        targets.map(
          ({ _id, entity, position }: any) => {
            return React.Children.map(
              entity,
              (child) => {
                return (
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
                    {React.cloneElement(child)}
                  </svg>
                );
              }
            );
          }
        )}
    </g>
  );
};
