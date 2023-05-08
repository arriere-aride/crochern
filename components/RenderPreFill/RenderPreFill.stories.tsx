import store from "@/stores";
import type {
  Meta,
  StoryObj,
} from "@storybook/react";
import { Provider } from "react-redux";

import { RenderPreFill } from "./RenderPreFill";

const meta: Meta<typeof RenderPreFill> = {
  title: "Crochet/Pages/RenderPreFill",
  component: RenderPreFill,
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
type Story = StoryObj<typeof RenderPreFill>;

export const Default: Story = {
  args: {},
};
