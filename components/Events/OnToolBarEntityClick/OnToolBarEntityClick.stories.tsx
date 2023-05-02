import type { Meta, StoryObj } from "@storybook/react";

import { OnToolBarEntityClick } from "./OnToolBarEntityClick";

const meta: Meta<typeof OnToolBarEntityClick> = {
  title: "Crochet/Atoms/Events/OnToolBarEntityClick",
  component: OnToolBarEntityClick,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof OnToolBarEntityClick>;

export const Base: Story = {};
