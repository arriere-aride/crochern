import type { Meta, StoryObj } from "@storybook/react";

import { DesignPage } from "./DesignPage";
import {
  OnToolBarEntityClick,
  tools,
} from "@/components/Events/OnToolBarEntityClick/OnToolBarEntityClick";
import store from "@/stores/EntityMoveStore";
import { Provider } from "react-redux";

const meta: Meta<typeof DesignPage> = {
  title: "Crochet/Pages/DesignPage",
  component: DesignPage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
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
