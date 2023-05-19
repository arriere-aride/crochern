import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { StarStitch } from "./StarStitch";

const meta: Meta<typeof StarStitch> = {
  title: "Crochet/Atoms/RenderFancies/StarStitch",
  component: StarStitch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StarStitch>;

export const Default: Story = {};
