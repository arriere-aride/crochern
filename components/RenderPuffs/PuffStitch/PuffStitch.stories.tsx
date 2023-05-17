import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { PuffStitch } from "./PuffStitch";

const meta: Meta<typeof PuffStitch> = {
  title: "Crochet/Atoms/RenderPuffs/PuffStitch",
  component: PuffStitch,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PuffStitch>;

export const Default: Story = {
  args: {},
};
