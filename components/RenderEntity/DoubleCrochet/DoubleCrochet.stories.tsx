import type { Meta, StoryObj } from "@storybook/react";

import { DoubleCrochet } from "./DoubleCrochet";

const meta: Meta<typeof DoubleCrochet> = {
  title: "Crochet/RenderEntity/DoubleCrochet",
  component: DoubleCrochet,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <svg>
        <Story />
      </svg>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DoubleCrochet>;

export const Default: Story = {
  args: {},
};
export const Variant1: Story = {
  args: {
    rotation: 25,
  },
};
export const Variant2: Story = {
  args: {
    rotation: -25,
  },
};
