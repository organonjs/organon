import * as React from "react";
import { ComponentStory, ComponentMeta } from "@organon/storykit";
import { InlineText } from "./InlineText";

export default {
  title: "Inline text",
  component: InlineText,
} as ComponentMeta<InlineText>;

const Template: ComponentStory<InlineText> = (args) => <InlineText {...args} />;

// eslint-disable-next-line
export const ShortInlineText: any = Template.bind({});
ShortInlineText.args = {
  text: "Hello world!",
  textVariant: "body1",
  textClassName: "MuiListItemText-primary",
  label: "Enter new text",
  enter: (value: string) => {
    console.log(value);
  },
  textFieldProps: {
    actionOnBlur: "enter",
  },
};

// eslint-disable-next-line
export const ShortInlineTextWithError: any = Template.bind({});
ShortInlineTextWithError.args = {
  text: "*$£!/:;",
  textVariant: "body1",
  textClassName: "MuiListItemText-primary",
  label: "Enter new text",
  enter: (value: string) => {
    console.log(value);
  },
  error: true,
  helperText: "Gibberish, please click and correct",
  textFieldProps: {
    actionOnBlur: "enter",
  },
};
