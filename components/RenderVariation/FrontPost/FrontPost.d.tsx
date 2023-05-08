export interface FrontPost {
  /**
   * What fill color to use
   */
  fillColor?: string;
  /**
   * How arc is filled
   */
  outterFillColor?: string;
  /**
   * Where to position
   */
  position?: {
    x: number;
    y: number;
  };
  /**
   * What padding to set
   */
  padding?: number;
  /**
   * Line size
   */
  size?: number;
  /**
   * Arc debug toggle
   */
  debug?: boolean;
  /**
   * What stroke width to use?
   */
  strokeWidth?: number;
}
