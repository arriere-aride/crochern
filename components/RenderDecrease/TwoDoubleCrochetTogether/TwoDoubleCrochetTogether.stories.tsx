import type { Meta, StoryObj } from "@storybook/react";

import { TwoDoubleCrochetTogether } from "./TwoDoubleCrochetTogether";

const meta: Meta<typeof TwoDoubleCrochetTogether> = {
  title: "Crochet/Atoms/RenderDecrease/TwoDoubleCrochetTogether",
  component: TwoDoubleCrochetTogether,
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
type Story = StoryObj<typeof TwoDoubleCrochetTogether>;

export const Default: Story = {};
