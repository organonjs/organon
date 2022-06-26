import * as React from "react";
import { ComponentStory, ComponentMeta } from "@organon/storykit";
import { ErrorTooltip } from "./ErrorTooltip";

export default {
  title: "Error Tooltip",
  component: ErrorTooltip,
} as ComponentMeta<ErrorTooltip>;

const Template: ComponentStory<ErrorTooltip> = (args) => (
  <ErrorTooltip {...args}>
    <span>There is a tip attached to me, hover over me</span>
  </ErrorTooltip>
);

// eslint-disable-next-line
export const ShortHelperTextErrorTooltip: any = Template.bind({});
ShortHelperTextErrorTooltip.args = {
  title: "Helper text",
};

// eslint-disable-next-line
export const LongHelperTextErrorTooltip: any = Template.bind({});
LongHelperTextErrorTooltip.args = {
  title:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};
