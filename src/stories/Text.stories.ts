import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../components/Text/Text";

const meta = {
  title: "Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: {} = () => {
  const size = "large";
  return null
};
