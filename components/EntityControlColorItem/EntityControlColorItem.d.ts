export interface EntityControlColorItem {
  /**
   * Which property to use
   */
  property: string;
  /**
   * Which value to have
   */
  value: any;
  /**
   * Which theme to use
   */
  theme?: any;
  /**
   * Which size it have
   */
  size?: number;
  /**
   * Which colors it can select
   */
  colors?: string[];
  /**
   * What to do on control color item click
   */
  onClick?: (values: any) => any;
}
