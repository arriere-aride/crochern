import {
  OnTargetEntityClick,
  OnToolBarEntityClick,
} from "@/components";
import { tools } from "@/data";
import store from "@/stores";
import type {
  Meta,
  StoryObj,
} from "@storybook/react";
import { Provider } from "react-redux";

import { DesignPage } from "./DesignPage";

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
    gridProps: {
      baseScale: 2,
      onTargetEntityClick: OnTargetEntityClick,
    },
    toolBarProps: {
      tools,
      handleClick: OnToolBarEntityClick,
    },
  },
};
