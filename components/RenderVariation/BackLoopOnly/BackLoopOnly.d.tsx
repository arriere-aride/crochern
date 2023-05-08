export interface BackLoopOnly {
  /**
   * What fill color to use
   */
  fillColor?: string;
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
   * How arc is filled
   */
  outterFillColor?: string;
}
