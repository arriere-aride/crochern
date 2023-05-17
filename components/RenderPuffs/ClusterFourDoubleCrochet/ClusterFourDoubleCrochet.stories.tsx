import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { ClusterFourDoubleCrochet } from "./ClusterFourDoubleCrochet";

const meta: Meta<
  typeof ClusterFourDoubleCrochet
> = {
  title:
    "Crochet/Atoms/RenderPuffs/ClusterFourDoubleCrochet",
  component: ClusterFourDoubleCrochet,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<
  typeof ClusterFourDoubleCrochet
>;

export const Default: Story = {
  args: {},
};
