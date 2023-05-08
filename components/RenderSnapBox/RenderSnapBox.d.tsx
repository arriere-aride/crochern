export interface RenderSnapBox {
  grid: DOMRect;
  cellSize?: number;
  theme?: {
    strokeColor: string;
    strokeWidth: number;
    fillColor: string;
  };
  padding?: number;
  currentPosition: { x: number; y: number };
  onDocumentClick?: (values: any) => any;
}
