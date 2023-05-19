import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { CrocodileStitch } from "./CrocodileStitch";

const meta: Meta<typeof CrocodileStitch> = {
  title:
    "Crochet/Atoms/RenderFancies/CrocodileStitch",
  component: CrocodileStitch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CrocodileStitch>;

export const Default: Story = {};
