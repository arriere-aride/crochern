/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import "./HoverEntity.css";
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

const HoverEntity = ({
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
    background-color: ${backgroundColor};
    border-color: ${borderColor};

    &:hover {
      background-color: ${hoverColors.backgroundColor};
      border-color: ${hoverColors.borderColor};
      ${hoverColors.props};
    }
  `;
  const panelCss = css`
    background-color:${panel.css.backgroundColor};
    border-color:${panel.css.borderColor};
    color:${panel.css.labelColor};
    width: fit-content;
    padding:2px;
    ${panel.css.props || ""}};
    `;
  if (panel.active === false) {
    return (
      <Hover
        className={["hover-entity", `hover-entity--${size}`].join(" ")}
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
        css={css`
          border: 0;
          background: transparent;
          outline: none;
        `}
      >
        <Hover
          className={["hover-entity", `hover-entity--${size}`].join(" ")}
          onMouseOver={onHover}
          data-testid="hover-element"
        >
          {entity}
        </Hover>
      </Popover.Button>
      <Popover.Panel className="absolute z-10" css={panelCss}>
        {panel.label}
      </Popover.Panel>
    </Popover>
  );
};
export { HoverEntity };
