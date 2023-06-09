import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { ThreeSingleCrochetTogether } from "./ThreeSingleCrochetTogether";

const meta: Meta<
  typeof ThreeSingleCrochetTogether
> = {
  title:
    "Crochet/Atoms/RenderDecrease/ThreeSingleCrochetTogether",
  component: ThreeSingleCrochetTogether,
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
  typeof ThreeSingleCrochetTogether
>;

export const Default: Story = {};
