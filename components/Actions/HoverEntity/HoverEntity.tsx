import styled from "@emotion/styled";
import { Popover } from "@headlessui/react";

interface HoverEntity {
  /**
   * Wich entity to use?
   */
  entity: React.ReactNode | JSX.Element;

  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What border color to use
   */
  borderColor?: string;
  /**
   * How large it should be?
   */
  size?: "small" | "medium" | "large";
  /**
   * How to behave onHover?
   */
  onHover?: (...v: any) => any;
  /**
   * How to style on hover?
   */
  hoverColors?: {
    backgroundColor: string;
    borderColor: string;
    props?: any;
  };
  /**
   * How to style pop over panel?
   */
  panel?: {
    active: boolean;
    label: string;
    css: {
      backgroundColor: string;
      borderColor: string;
      labelColor: string;
      props?: any;
    };
  };
}

export const HoverEntity = ({
  entity,
  backgroundColor = "transparent",
  size = "medium",
  borderColor = "transparent",
  onHover = (_) => true,
  hoverColors = {
    backgroundColor: "#a1a1a1",
    borderColor: "transparent",
  },
  panel = {
    active: false,
    label: "panel",
    css: {
      backgroundColor: "#a1a1a1",
      borderColor: "transparent",
      labelColor: "#fefefe",
    },
  },
}: HoverEntity): JSX.Element => {
  const Hover = styled.div`
    display: inline-block;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
    background-color: ${backgroundColor};
    border-color: ${borderColor};

    &:hover {
      background-color: ${hoverColors.backgroundColor};
      border-color: ${hoverColors.borderColor};
      ${hoverColors.props};
    }
  `;
  const panelCss = {
    backgroundColor: `${panel.css.backgroundColor}`,
    borderColor: `${panel.css.borderColor}`,
    color: `${panel.css.labelColor}`,
    width: "fit-content",
    padding: "2px",
  };
  const paddingMap = {
    small: "2px",
    medium: "4px",
    large: "12px",
  };

  if (panel.active === false) {
    return (
      <Hover
        style={{ padding: `${paddingMap[size]}` }}
        onMouseOver={onHover}
        data-testid="hover-element"
      >
        {entity}
      </Hover>
    );
  }

  return (
    <Popover className="relative">
      <Popover.Button
        style={{
          border: 0,
          background: "transparent",
          outline: "none",
        }}
      >
        <Hover
          className={["hover-entity", `hover-entity--${size}`].join(" ")}
          onMouseOver={onHover}
          data-testid="hover-element"
        >
          {entity}
        </Hover>
      </Popover.Button>
      <Popover.Panel className="absolute z-10" style={panelCss}>
        {panel.label}
      </Popover.Panel>
    </Popover>
  );
};
