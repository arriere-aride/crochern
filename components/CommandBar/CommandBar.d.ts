interface CommandBar {
  /**
   * How large it should be?
   */
  size?: "small" | "medium" | "large";
  /**
   * What caret color to use
   */
  caretColor?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What border color to use
   */
  borderColor?: string;
  /**
   * What content color to use
   */
  contentColor?: string;
  /**
   * Display keyboard key shortcut
   */
  shortcutKey: JSX.Element;
  /**
   * What placeholder to use
   */
  placeholder?: string;
  /**
   * What key to use in order to toggle
   */
  toggleKey?: string;
  /**
   * What visibility by default?
   */
  isVisible?: boolean;
}
export { CommandBar };
