import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { RepeatDoubleCrochetTogether } from "./RepeatDoubleCrochetTogether";

const meta: Meta<
  typeof RepeatDoubleCrochetTogether
> = {
  title:
    "Crochet/Atoms/RenderDecrease/RepeatDoubleCrochetTogether",
  component: RepeatDoubleCrochetTogether,
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
type Story = StoryObj<
  typeof RepeatDoubleCrochetTogether
>;

export const Default: Story = {};
export const WithFour: Story = {
  args: { repeat: 4 },
};
export const WithFive: Story = {
  args: { repeat: 5 },
};
export const WithNine: Story = {
  args: { repeat: 9 },
};
