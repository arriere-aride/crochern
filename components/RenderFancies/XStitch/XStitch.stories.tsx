import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { XStitch } from "./XStitch";

const meta: Meta<typeof XStitch> = {
  title: "Crochet/Atoms/RenderFancies/XStitch",
  component: XStitch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof XStitch>;

export const Default: Story = {};
