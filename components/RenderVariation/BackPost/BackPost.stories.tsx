import type { Meta, StoryObj } from "@storybook/react";

import { BackPost } from "./BackPost";

const meta: Meta<typeof BackPost> = {
  title: "Crochet/RenderVariation/BackPost",
  component: BackPost,
  tags: ["autodocs"],
  argTypes: {
    fillColor: {
      control: "color",
    },
  },
  decorators: [
    (Story) => (
      <svg>
        <Story />
      </svg>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BackPost>;

export const Default: Story = {};
export const WithDebug: Story = {
  args: {
    size: 24,
    debug: true,
  },
};
