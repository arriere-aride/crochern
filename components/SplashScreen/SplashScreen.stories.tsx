import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { SplashScreen } from "./SplashScreen";

const meta: Meta<typeof SplashScreen> = {
  title: "Crochet/components/SplashScreen",
  component: SplashScreen,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SplashScreen>;

export const Default: Story = {};
