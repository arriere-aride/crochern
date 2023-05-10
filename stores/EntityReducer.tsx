export interface EntityTheme {
  color?: string;
  strokeWidth?: number;
  backgroundColor?: string;
}
export interface Entity {
  _id: string;
  label: string;
  theme?: EntityTheme;
}
