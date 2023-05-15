import store, { Store } from "@/stores";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RenderBox } from "../RenderBox/RenderBox";
import { RenderTargetBox as IRenderTargetBox } from "./RenderTargetBox.d";

export const RenderTargetBox = ({
  targets,
  onTargetEntityClick,
}: IRenderTargetBox) => {
  const [rerender, setRender] = useState(false);
  const selected = useSelector(
    (state: Store) => state.selection.selection[0]
  );
  store.subscribe(() => setRender(!rerender));
  return (
    <g>
      {targets?.length > 0 &&
        targets.map(
          ({
            _id,
            entity,
            position,
            theme,
          }: any) => {
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
                    <RenderBox
                      entity={entity}
                      theme={theme}
                    />
                  ) : (
                    React.cloneElement(child, {
                      theme,
                    })
                  )}
                </svg>
              )
            );
          }
        )}
    </g>
  );
};
