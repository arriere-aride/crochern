import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { OnPressShift } from "./OnPressShift";

const meta: Meta<typeof OnPressShift> = {
  title: "Crochet/Atoms/OnPressShift",
  component: OnPressShift,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof OnPressShift>;

export const Default: Story = {
  args: {},
};
