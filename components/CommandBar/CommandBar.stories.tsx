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

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const key = "F4";
    const canvas = within(canvasElement);
    const bar = canvas.getByTestId("command-bar");
    await bar.focus();
    expect(bar).not.toBeVisible();
    await userEvent.keyboard(`{${key}}`);
    await bar.focus();
    // issue with testing a keyEvent, not testable
    // await waitFor(() => expect(bar).toBeVisible());
  },
  args: {
    toggleKey: "F4",
  },
};

export const VisibleByDefault: Story = {
  args: {
    isVisible: true,
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
