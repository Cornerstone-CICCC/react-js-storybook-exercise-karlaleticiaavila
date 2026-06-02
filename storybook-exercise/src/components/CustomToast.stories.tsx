import type { Meta, StoryObj } from "@storybook/react";
import CustomToast from "./CustomToast";

const meta: Meta<typeof CustomToast> = {
  title: "Components/CustomToast",
  component: CustomToast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CustomToast>;

export const Success: Story = {
  args: {
    status: "success",
    text: "Your action was successful!",
    hasIcon: true,
  },
};

export const Warning: Story = {
  args: {
    status: "warning",
    text: "Please check your information.",
    hasIcon: true,
  },
};

export const Error: Story = {
  args: {
    status: "error",
    text: "Something went wrong.",
    hasIcon: true,
  },
};