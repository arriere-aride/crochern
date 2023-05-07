import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { RenderSnapBox } from "./RenderSnapBox";

const meta: Meta<typeof RenderSnapBox> = {
  title: "Crochet/Atoms/RenderSnapBox",
  component: RenderSnapBox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RenderSnapBox>;

export const Default: Story = {
  args: {
    grid: new DOMRect(0, 0, 250, 250),
  },
};
