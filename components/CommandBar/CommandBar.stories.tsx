import type { Meta, StoryObj } from "@storybook/react";

import { CommandBar } from "./CommandBar";
import { ShortcutKey } from "../ShortcutKey/ShortcutKey";

const meta: Meta<typeof CommandBar> = {
  title: "Crochet/Bar/CommandBar",
  component: CommandBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CommandBar>;

export const Medium: Story = {};
export const WithShortKey: Story = {
  args: {
    shortcutKey: (
      <>
        <ShortcutKey label="R" size="extra-small" />
      </>
    ),
  },
};