import { EntityTheme } from "@/stores";

export interface ToolBarItem {
  /**
   * Wich index to use
   */
  index?: number;
  /**
   * Wich size item have
   */
  size?: number;
  /**
   * Wich item to use
   */
  item: {
    entity: JSX.Element | React.ReactNode;
    label: string;
  };
  /**
   * What theme to use
   */
  theme: EntityTheme;
  /**
   * What padding to have
   */
  padding?: number;
  /**
   * dispatch onClick event on entity
   * @param props any
   * @returns any
   */
  handleClick?: ({ e, index }: any) => any | void;
}
