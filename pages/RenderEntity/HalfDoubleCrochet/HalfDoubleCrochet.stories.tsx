import type { Meta, StoryObj } from "@storybook/react";

import { HalfDoubleCrochet } from "./HalfDoubleCrochet";

const meta: Meta<typeof HalfDoubleCrochet> = {
  title: "Crochet/RenderEntity/HalfDoubleCrochet",
  component: HalfDoubleCrochet,
  tags: ["autodocs"],
  argTypes: {
  },
  decorators: [(Story) => (<svg><Story/></svg>)]
};

export default meta;
type Story = StoryObj<typeof HalfDoubleCrochet>;

export const Default: Story = {
  args: {
  }
};
