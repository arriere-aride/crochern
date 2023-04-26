import type { Meta, StoryObj } from "@storybook/react";

import { ThreeSingleCrochetOneStitch } from "./ThreeSingleCrochetOneStitch";

const meta: Meta<typeof ThreeSingleCrochetOneStitch> = {
  title: "Crochet/RenderIncrease/ThreeSingleCrochetOneStitch",
  component: ThreeSingleCrochetOneStitch,
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
type Story = StoryObj<typeof ThreeSingleCrochetOneStitch>;

export const Default: Story = {};
