import { EntityTheme } from "@/stores";

export interface RenderBox {
  /**
   * Box size, will also scale entity inside
   */
  size?: number;
  /**
   * What box theme to use
   */
  boxTheme?: {
    color: string;
    strokeWidth: number;
  };
  /**
   * What theme to use
   */
  theme?: EntityTheme;
  /**
   * What radius corners circle to use
   */
  radius?: number;
  /**
   * What entity to render
   */
  entity: React.ReactNode | JSX.Element;
  /**
   * What padding entity should have
   */
  padding?: number;
  /**
   * What position it have on the grid
   */
  position?: { x: number; y: number };
}
