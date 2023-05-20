import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { Picot } from "./Picot";

const meta: Meta<typeof Picot> = {
  title: "Crochet/Atoms/RenderFancies/Picot",
  component: Picot,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Picot>;

export const Default: Story = {};
