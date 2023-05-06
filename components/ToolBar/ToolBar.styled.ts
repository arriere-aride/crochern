interface ToolBarStyle {
  backgroundColor: string;
  borderColor: string;
  fillColor: string;
  cellSize: number;
  visible: boolean;
}

export const toolBarStyle = ({
  backgroundColor,
  borderColor,
  fillColor,
  cellSize,
  visible,
}: ToolBarStyle) => ({
  display: "grid",
  gridGap: 2,
  gridAutoRows: cellSize,
  backgroundColor,
  borderColor,
  color: fillColor,
  gridTemplateColumns: `repeat(auto-fit, minmax(${cellSize}, 1fr))`,
  visibility: visible ? "visible" : "hidden",
});
