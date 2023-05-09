import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { RenderBox } from "./RenderBox";

import { tools } from "@/data";

const meta: Meta<typeof RenderBox> = {
  title: "Crochet/Atoms/RenderBox",
  component: RenderBox,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      fillColor: {
        control: "color",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RenderBox>;

export const Default: Story = {
  render: () => {
    return (
      <>
        {tools.map(({ entity }, index) => (
          <div key={`with-entities-${index}`}>
            <svg width="32" height="32">
              <RenderBox entity={entity} />
            </svg>
          </div>
        ))}
      </>
    );
  },
};
