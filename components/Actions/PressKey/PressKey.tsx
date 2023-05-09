import React from "react";
import { usePressKey } from "../../hooks/usePressKey";

import { useToggle } from "../../hooks/useToggle";
import { ShortcutKey } from "../../ShortcutKey/ShortcutKey";

interface PressKey {
  keyName: string;
}

const PressKey = ({
  keyName,
}: PressKey): JSX.Element => {
  const [value, toggle] = useToggle();
  const [key, setKey] =
    React.useState<string>(keyName);

  const onKeyPress = (event: any) => {
    setKey(event.key);
    toggle();
  };

  usePressKey([key], onKeyPress);
  if (value) {
    return (
      <div>
        <ShortcutKey
          size="large"
          label={key.toString()}
        />
      </div>
    );
  }
  return <></>;
};

export { PressKey };
