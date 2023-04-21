import type { Meta, StoryObj } from "@storybook/react";

import { ThreeSingleCrochetTogether } from "./ThreeSingleCrochetTogether";

const meta: Meta<typeof ThreeSingleCrochetTogether> = {
  title: "Crochet/RenderDecrease/ThreeSingleCrochetTogether",
  component: ThreeSingleCrochetTogether,
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
type Story = StoryObj<typeof ThreeSingleCrochetTogether>;

export const Default: Story = {};
