import "./HoverEntity.css";
import styled from '@emotion/styled'

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
}: HoverEntity): JSX.Element => {
  const Hover = styled.div`
  background-color: ${backgroundColor};
  border-color:${borderColor};

  &:hover{
    background-color: ${hoverColors.backgroundColor};
    border-color: ${hoverColors.borderColor};
    ${hoverColors.props};
  }`
  return (
    <Hover 
      className={["hover-entity", `hover-entity--${size}`].join(" ")}
      onMouseOver={onHover}
      data-testid="hover-element"
    >
      {entity}
    </Hover>
  );
};
export { HoverEntity };
