import type { Meta, StoryObj } from "@storybook/react";

import { DesignPage } from "./DesignPage";
import {
  OnToolBarEntityClick,
  tools,
} from "@/components/Events/OnToolBarEntityClick/OnToolBarEntityClick";

const meta: Meta<typeof DesignPage> = {
  title: "Crochet/Pages/DesignPage",
  component: DesignPage,
  tags: ["autodocs"],
  // decorators: [Story => <div style={{width: "512px"}}><Story/></div>]
};

export default meta;
type Story = StoryObj<typeof DesignPage>;

export const Default: Story = {
  args: {
    toolBarProps: {
      tools,
      handleClick: OnToolBarEntityClick,
    },
  },
};
