import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { EntityControlItem } from "./EntityControlItem";

const meta: Meta<typeof EntityControlItem> = {
  title: "Crochet/Atoms/EntityControlItem",
  component: EntityControlItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EntityControlItem>;

export const Default: Story = {
  args: {},
};
