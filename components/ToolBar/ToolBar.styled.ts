export const toolBarStyle = ({
  borderColor,
  cellSize,
  visible,
  theme,
}: any) => ({
  display: "grid",
  gridGap: 2,
  gridAutoRows: cellSize,
  backgroundColor: theme.backgroundColor,
  borderColor,
  color: theme.color,
  gridTemplateColumns: `repeat(auto-fit, minmax(${cellSize}, 1fr))`,
  visibility: visible ? "visible" : "hidden",
});
