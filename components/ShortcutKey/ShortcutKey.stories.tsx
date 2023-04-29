import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { ShortcutKey } from "./ShortcutKey";

const meta: Meta<typeof ShortcutKey> = {
  title: "Crochet/Atoms/Info/ShortcutKey",
  component: ShortcutKey,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    borderBottomColor: {
      control: "color",
    },
    labelColor: {
      control: "color",
    },
    onPress: {
      action: "pressed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ShortcutKey>;

export const Medium: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole("button");
    await userEvent.click(btn);
  },
  args: {
    label: "F1",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "F1",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "F1",
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "extra-small",
    label: "F1",
  },
};
