import type { Meta, StoryObj } from "@storybook/react";

import { TrebleCrochet } from "./TrebleCrochet";

const meta: Meta<typeof TrebleCrochet> = {
  title: "Crochet/Atoms/RenderEntity/TrebleCrochet",
  component: TrebleCrochet,
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
type Story = StoryObj<typeof TrebleCrochet>;

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
