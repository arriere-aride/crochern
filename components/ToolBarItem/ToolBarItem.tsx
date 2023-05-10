import { Children, cloneElement } from "react";
import { Tooltip } from "react-tooltip";
import { type ToolBarItem as IToolBarItem } from "./ToolBarItem.d";
import { Anchor } from "./ToolBarItem.styled";

export const ToolBarItem = ({
  index = 1,
  size = 16,
  item,
  padding = 2,
  theme = {
    backgroundColor: "#484848",
    color: "#7F7F80",
    strokeWidth: 2,
  },
  handleClick = () => true,
}: IToolBarItem) => {
  const StyledAnchor = Anchor({ size, padding });
  return (
    <div
      key={`itemBar-item-${index}`}
      style={{ height: size }}
    >
      {Children.map(item.entity, (entity) => (
        <div
          key={`itemBar-item-entity-${index}`}
          style={{ height: size }}
        >
          <Tooltip
            anchorSelect={`.anchor-${index}`}
            place="right"
            style={{
              backgroundColor:
                theme.backgroundColor,
            }}
          >
            {item.label}
          </Tooltip>
          <StyledAnchor
            className={`anchor-${index}`}
            onClick={(e: any) =>
              handleClick({ e, index })
            }
          >
            <svg width="100%" height="100%">
              {cloneElement(entity as any, {
                theme,
                size: size - padding,
              })}
            </svg>
          </StyledAnchor>
        </div>
      ))}
    </div>
  );
};
