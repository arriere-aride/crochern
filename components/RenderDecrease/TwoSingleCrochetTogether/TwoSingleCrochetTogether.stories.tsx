import type { Meta, StoryObj } from "@storybook/react";

import { TwoSingleCrochetTogether } from "./TwoSingleCrochetTogether";

const meta: Meta<typeof TwoSingleCrochetTogether> = {
  title: "Crochet/RenderDecrease/TwoSingleCrochetTogether",
  component: TwoSingleCrochetTogether,
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
type Story = StoryObj<typeof TwoSingleCrochetTogether>;

export const Default: Story = {};
