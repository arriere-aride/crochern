import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { InvertedYStitch } from "./InvertedYStitch";

const meta: Meta<typeof InvertedYStitch> = {
  title:
    "Crochet/Atoms/RenderFancies/InvertedYStitch",
  component: InvertedYStitch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InvertedYStitch>;

export const Default: Story = {};
