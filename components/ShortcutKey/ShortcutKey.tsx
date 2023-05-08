import styled from "@emotion/styled";

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
  size?:
    | "extra-small"
    | "small"
    | "medium"
    | "large";
  /**
   * Key content
   */
  label: string;

  /**
   * Optional click handler
   */
  onPress?: () => void;

  /**
   * Keyboard key attached to shortcut
   */
  keyMaps?: {
    name: string;
    handler: () => void;
  }[];
}

const ShortcutKeyButton = styled.button`
  border: 0;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  font-weight: 700;
  cursor: pointer;
`;

/**
 * Indicates Key shortcut
 */
export const ShortcutKey = ({
  size = "medium",
  backgroundColor = "#D9D9D9",
  borderBottomColor = "#676767",
  labelColor = "#1F7B76",
  label,
  onPress,
  ...props
}: ShortcutKey) => {
  const sizedStyles = {
    "extra-small": {
      fontSize: "8px",
      padding: "8px 12px",
    },
    small: {
      fontSize: "12px",
      padding: "10px 16px",
    },
    medium: {
      fontSize: "14px",
      padding: "11px 20px",
    },
    large: {
      fontSize: "16px",
      padding: "12px 24px",
    },
  };

  return (
    <ShortcutKeyButton
      type="button"
      style={sizedStyles[size]}
      onClick={onPress}
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
    </ShortcutKeyButton>
  );
};
