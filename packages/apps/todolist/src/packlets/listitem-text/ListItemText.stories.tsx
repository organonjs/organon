import * as React from "react";
import { ComponentStory, ComponentMeta } from "@organon/storykit";
import { ListItemText } from "./ListItemText";

export default {
  title: "List Item Text",
  component: ListItemText,
} as ComponentMeta<ListItemText>;

const Template: ComponentStory<ListItemText> = (args) => <ListItemText {...args} />;

// eslint-disable-next-line
export const ShortListItemText: any = Template.bind({});
ShortListItemText.args = {
  primary: "Hello world!",
  primaryLabel: "Enter new text",
  primaryEnter: (value: string) => {
    console.log(value);
  },
  primaryTextFieldProps: {
    actionOnBlur: "enter",
  },
};

// eslint-disable-next-line
export const ShortListItemTextWithError: any = Template.bind({});
ShortListItemTextWithError.args = {
  primary: "*$£!/:;",
  primaryLabel: "Enter new text",
  primaryEnter: (value: string) => {
    console.log(value);
  },
  primaryError: true,
  primaryHelperText: "Gibberish, please click and correct",
  primaryTextFieldProps: {
    actionOnBlur: "enter",
  },
};
