import type { Meta, StoryObj } from "@storybook/react";

import { DoubleTrebleCrochet } from "./DoubleTrebleCrochet";

const meta: Meta<typeof DoubleTrebleCrochet> = {
  title: "Crochet/RenderEntity/DoubleTrebleCrochet",
  component: DoubleTrebleCrochet,
  tags: ["autodocs"],
  argTypes: {
  },
  decorators: [(Story) => (<svg><Story/></svg>)]
};

export default meta;
type Story = StoryObj<typeof DoubleTrebleCrochet>;

export const Default: Story = {
  args: {
  }
};
export const Variant1: Story = {
  args: {
    rotation: 15
  }
};
export const Variant2: Story = {
  args: {
    rotation: -15
  }
};