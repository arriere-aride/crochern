import type { Meta, StoryObj } from "@storybook/react";

import { TwoSingleCrochetOneStitch } from "./TwoSingleCrochetOneStitch";

const meta: Meta<typeof TwoSingleCrochetOneStitch> = {
  title: "Crochet/RenderIncrease/TwoSingleCrochetOneStitch",
  component: TwoSingleCrochetOneStitch,
  tags: ["autodocs"],
  argTypes: {
    fillColor: {
      control: "color",
    },
  },
  decorators: [(Story) => (<svg><Story/></svg>)]
};

export default meta;
type Story = StoryObj<typeof TwoSingleCrochetOneStitch>;

export const Default: Story = {
};
