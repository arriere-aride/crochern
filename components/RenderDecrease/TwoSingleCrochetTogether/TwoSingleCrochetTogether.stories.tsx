import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { TwoSingleCrochetTogether } from "./TwoSingleCrochetTogether";

const meta: Meta<
  typeof TwoSingleCrochetTogether
> = {
  title:
    "Crochet/Atoms/RenderDecrease/TwoSingleCrochetTogether",
  component: TwoSingleCrochetTogether,
  tags: ["autodocs"],

  decorators: [
    (Story) => (
      <svg>
        <Story />
      </svg>
    ),
  ],
};

export default meta;
type Story = StoryObj<
  typeof TwoSingleCrochetTogether
>;

export const Default: Story = {};
