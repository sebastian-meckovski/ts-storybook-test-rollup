import type { Meta, StoryObj } from "@storybook/react";
import { Text, textSizes } from "../components/Text/Text";

const meta = {
  title: "Another Example/Text",
  component: Text,
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextTest: Story = {
  

  args: {
    size: '90px',
  },
  render: ({...args}) => {
    console.log(textSizes.medium)
    return (
      <Text {...args}>helo1</Text>
    )
  }
}