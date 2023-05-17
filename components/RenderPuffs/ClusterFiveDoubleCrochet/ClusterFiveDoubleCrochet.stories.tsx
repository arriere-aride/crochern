import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { ClusterFiveDoubleCrochet } from "./ClusterFiveDoubleCrochet";

const meta: Meta<
  typeof ClusterFiveDoubleCrochet
> = {
  title:
    "Crochet/Atoms/RenderPuffs/ClusterFiveDoubleCrochet",
  component: ClusterFiveDoubleCrochet,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<
  typeof ClusterFiveDoubleCrochet
>;

export const Default: Story = {
  args: {},
};
