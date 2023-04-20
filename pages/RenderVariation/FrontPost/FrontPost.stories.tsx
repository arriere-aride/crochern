import type { Meta, StoryObj } from "@storybook/react";

import { FrontPost } from "./FrontPost";

const meta: Meta<typeof FrontPost> = {
  title: "Crochet/RenderVariation/FrontPost",
  component: FrontPost,
  tags: ["autodocs"],
  argTypes: {
    fillColor: {
      control: "color",
    },
  },
  decorators: [(Story) => (<svg><Story/></svg>)]
};

export default meta;
type Story = StoryObj<typeof FrontPost>;

export const Default: Story = {
};
export const WithDebug: Story = {
  args: {
    size: 24,
    debug: true
  }
};