import type { Meta, StoryObj } from "@storybook/react";

import { BackLoopOnly } from "./BackLoopOnly";

const meta: Meta<typeof BackLoopOnly> = {
  title: "Crochet/Atoms/RenderVariation/BackLoopOnly",
  component: BackLoopOnly,
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
type Story = StoryObj<typeof BackLoopOnly>;

export const Default: Story = {};
export const WithDebug: Story = {
  args: {
    size: 24,
    debug: true,
  },
};
