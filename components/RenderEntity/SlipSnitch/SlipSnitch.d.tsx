export interface SlipSnitch {
  theme?: {
    /**
     * What stroke width to set
     */
    strokeWidth: number;
    /**
     * What fill color to use
     */
    fillColor: string;
    /**
     * What stroke color to use
     */
    strokeColor: string;
  };
  /**
   * What background color to use
   */
  backgroundColor?: string;

  /**
   * What padding to set
   */
  padding?: number;
  /**
   * Box size
   */
  size?: number;
  /**
   * What radius to use
   */
  radius?: number;
  /**
   * Where to position
   */
  position?: {
    x: number;
    y: number;
  };
}
