import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { DiamondStitch } from "./DiamondStitch";

const meta: Meta<typeof DiamondStitch> = {
  title:
    "Crochet/Atoms/RenderFancies/DiamondStitch",
  component: DiamondStitch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DiamondStitch>;

export const Default: Story = {};
