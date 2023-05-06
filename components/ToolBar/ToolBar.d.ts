export interface ToolBar {
  /**
   * What tools to use
   */
  tools?: {
    entity: JSX.Element | React.ReactNode;
    label: string;
  }[];
  /**
   * Which size each tool have
   */
  toolSize?: number;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What content color to use
   */
  fillColor?: string;
  /**
   * What border color to use
   */
  borderColor?: string;
  /**
   * Which padding to use?
   */
  padding?: number;
  /**
   * dispatch onClick event on entity
   * @param props any
   * @returns any
   */
  handleClick?: ({ e, index }: any) => any | void;
  /**
   * What key to use in order to toggle
   */
  toggleKey?: string;
  /**
   * What visibility by default?
   */
  isVisible?: boolean;
}
