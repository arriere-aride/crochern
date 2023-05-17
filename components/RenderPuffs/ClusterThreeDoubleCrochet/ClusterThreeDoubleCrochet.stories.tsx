import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { ClusterThreeDoubleCrochet } from "./ClusterThreeDoubleCrochet";

const meta: Meta<
  typeof ClusterThreeDoubleCrochet
> = {
  title:
    "Crochet/Atoms/RenderPuffs/ClusterThreeDoubleCrochet",
  component: ClusterThreeDoubleCrochet,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<
  typeof ClusterThreeDoubleCrochet
>;

export const Default: Story = {
  args: {},
};
