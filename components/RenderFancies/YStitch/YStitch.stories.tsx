import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { YStitch } from "./YStitch";

const meta: Meta<typeof YStitch> = {
  title: "Crochet/Atoms/RenderFancies/YStitch",
  component: YStitch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof YStitch>;

export const Default: Story = {};
