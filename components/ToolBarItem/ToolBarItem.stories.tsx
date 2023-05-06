/* eslint-disable react/jsx-key */
import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { tools } from "@/data";
import { faker } from "@faker-js/faker";
import { ToolBarItem } from "./ToolBarItem";

const meta: Meta<typeof ToolBarItem> = {
  title: "Crochet/Atoms/ToolBarItem",
  component: ToolBarItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToolBarItem>;

export const Default: Story = {
  args: {
    item: faker.helpers.arrayElement(tools),
  },
};
