import type { Meta, StoryObj } from "@storybook/react";

import { TwoDoubleCrochetOneStitch } from "./TwoDoubleCrochetOneStitch";

const meta: Meta<typeof TwoDoubleCrochetOneStitch> = {
  title: "Crochet/Atoms/RenderIncrease/TwoDoubleCrochetOneStitch",
  component: TwoDoubleCrochetOneStitch,
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
type Story = StoryObj<typeof TwoDoubleCrochetOneStitch>;

export const Default: Story = {};
