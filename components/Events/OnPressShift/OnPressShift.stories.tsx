import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import store from "@/stores";
import { Provider } from "react-redux";
import { OnPressShift } from "./OnPressShift";

const meta: Meta<typeof OnPressShift> = {
  title: "Crochet/Atoms/Events/OnPressShift",
  component: OnPressShift,
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
type Story = StoryObj<typeof OnPressShift>;

export const Default: Story = {
  args: {},
};
