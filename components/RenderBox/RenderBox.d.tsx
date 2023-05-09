export interface RenderBox {
  /**
   * Box size, will also scale entity inside
   */
  size?: number;
  theme?: {
    /**
     * What stroke width to use
     */
    strokeWidth?: number;
    /**
     * What fill color to use
     */
    fillColor?: string;
  };
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
