import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";

import { CommandBar } from "./CommandBar";
import { ShortcutKey } from "../ShortcutKey/ShortcutKey";
import { userEvent, waitFor, within } from "@storybook/testing-library";

const meta: Meta<typeof CommandBar> = {
  title: "Crochet/Bar/CommandBar",
  component: CommandBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CommandBar>;

export const Medium: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const bar = canvas.getByTestId("command-bar");
    expect(bar).not.toBeVisible();
    await userEvent.keyboard("{F1}");
    await waitFor(() => expect(bar).toBeVisible());
  },
  args: {
    toggleKey: "F1",
  },
};
export const WithShortKey: Story = {
  args: {
    isVisible: true,
    shortcutKey: (
      <>
        <ShortcutKey label="R" size="extra-small" />
      </>
    ),
  },
};
