/* eslint-disable react/jsx-key */
import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { tools } from "@/data";
import { OnToolBarEntityClick } from "@@/components/Events/OnToolBarEntityClick/OnToolBarEntityClick";
import { ToolBar } from "./ToolBar";

const meta: Meta<typeof ToolBar> = {
  title: "Crochet/Components/Bar/ToolBar",
  component: ToolBar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "28px",
          height: "100%",
          backgroundColor: "#484848",
          position: "relative",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ToolBar>;

export const Default: Story = {
  args: {
    tools,
  },
};

export const WithStore: Story = {
  args: {
    tools,
    handleClick: OnToolBarEntityClick,
  },
};
