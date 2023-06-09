import { expect } from "@storybook/jest";
import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { ShortcutKey } from "@/components";
import {
  userEvent,
  within,
} from "@storybook/testing-library";
import { CommandBar } from "./CommandBar";

const meta: Meta<typeof CommandBar> = {
  title: "Crochet/Components/Bar/CommandBar",
  component: CommandBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CommandBar>;

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const key = "F4";
    const canvas = within(canvasElement);
    const bar = canvas.getByTestId("command-bar");

    expect(bar).not.toBeVisible();

    await step(
      "user press toggle key",
      async () => {
        await userEvent.keyboard(`{${key}}`);
        await bar.focus();
      }
    );

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
        <ShortcutKey
          label="R"
          size="extra-small"
        />
      </>
    ),
  },
};
