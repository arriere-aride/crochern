import type { Meta, StoryObj } from "@storybook/react";

import { HoverEntity } from "@@/components/Actions";
import { DoubleCrochet } from "@@/components/RenderEntity";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta<typeof HoverEntity> = {
  title: "Crochet/Actions/HoverEntity",
  component: HoverEntity,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HoverEntity>;

export const Medium: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const element = canvas.getByTestId("hover-element");
    await userEvent.hover(element);
    await userEvent.click(element);
  },
  args: {
    entity: <>entity</>,
  },
};

export const HoverCirlce: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const element = canvas.getByTestId("hover-element");
    await userEvent.hover(element);
  },
  args: {
    size: "large",
    hoverColors: {
      backgroundColor: "#a1a1a1",
      borderColor: "transparent",
      props: `border-radius: 100%;`,
    },
    entity: (
      <div
        style={{
          width: "64px",
          height: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        entity
      </div>
    ),
  },
};

export const HoverOnSvg: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const element = canvas.getByTestId("hover-element");
    await userEvent.hover(element);
  },
  args: {
    panel: {
      active: true,
      label: "Bride",
      css: {
        backgroundColor: "#a1a1a1",
        borderColor: "transparent",
        labelColor: "#fefefe",
      },
    },
    size: "small",
    entity: (
      <div style={{ width: "32px", height: "32px" }}>
        <svg width="100%" height="100%" viewBox="16 16 64 64">
          <DoubleCrochet size={16} rotation={0} />
        </svg>
      </div>
    ),
  },
};
