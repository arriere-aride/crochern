import React from "react";
import "./ShortcutKey.css";

interface ShortcutKey {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What border bottom color to use
   */
  borderBottomColor?: string;
  /**
   * What label color to use
   */
  labelColor?: string;
  /**
   * How large it should be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Key content
   */
  label: string;

  /**
   * Optional click handler
   */
  onPress?: () => void;
}

/**
 * Indicates Key shortcut
 */
export const ShortcutKey = ({
  size = "medium",
  backgroundColor = "#D9D9D9",
  borderBottomColor = "#676767",
  labelColor="#1F7B76",
  label,
  ...props
}: ShortcutKey) => {
  return (
    <button
      type="button"
      className={["shortcut-key", `shortcut-key--${size}`].join(" ")}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
          border-bottom-color: ${borderBottomColor};
          color: ${labelColor};
        }
      `}</style>
    </button>
  );
};
