import type { Meta, StoryObj } from "@storybook/react";

import { FrontLoopOnly } from "./FrontLoopOnly";

const meta: Meta<typeof FrontLoopOnly> = {
  title: "Crochet/RenderVariation/FrontLoopOnly",
  component: FrontLoopOnly,
  tags: ["autodocs"],
  argTypes: {
    fillColor: {
      control: "color",
    },
  },
  decorators: [(Story) => (<svg><Story/></svg>)]
};

export default meta;
type Story = StoryObj<typeof FrontLoopOnly>;

export const Default: Story = {
};
export const WithDebug: Story = {
  args: {
    size: 24,
    debug: true
  }
};