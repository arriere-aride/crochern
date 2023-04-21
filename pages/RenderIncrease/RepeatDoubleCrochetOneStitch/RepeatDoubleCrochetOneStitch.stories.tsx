import type { Meta, StoryObj } from "@storybook/react";

import { RepeatDoubleCrochetOneStitch } from "./RepeatDoubleCrochetOneStitch";

const meta: Meta<typeof RepeatDoubleCrochetOneStitch> = {
  title: "Crochet/RenderIncrease/RepeatDoubleCrochetOneStitch",
  component: RepeatDoubleCrochetOneStitch,
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
type Story = StoryObj<typeof RepeatDoubleCrochetOneStitch>;

export const Default: Story = {};
export const WithFour: Story = { args: { repeat: 4 } };
export const WithFive: Story = { args: { repeat: 5 } };
export const WithNine: Story = { args: { repeat: 9 } };
