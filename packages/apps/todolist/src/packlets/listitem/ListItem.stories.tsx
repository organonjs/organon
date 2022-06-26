import React from "react";
import { ComponentStory, ComponentMeta } from "@organon/storykit";
import { ListItem } from "./ListItem";

export default {
  title: "List Item",
  component: ListItem,
} as ComponentMeta<ListItem>;

const Template: ComponentStory<ListItem> = (args) => <ListItem {...args} />;

// eslint-disable-next-line
export const PlainValidEditableListItem: any = Template.bind({});
PlainValidEditableListItem.args = {
  primary: "Hello",
  primaryLabel: "Nice Message",
  primaryEnter: (value: string) => {
    console.log(value);
  },
  primaryTextFieldProps: {
    actionOnBlur: "enter",
  },
};

// eslint-disable-next-line
export const PlainInvalidEditableListItem: any = Template.bind({});
PlainInvalidEditableListItem.args = {
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

// eslint-disable-next-line
export const CheckValidEditableListItem: any = Template.bind({});
CheckValidEditableListItem.args = {
  primary: "Hello",
  primaryLabel: "Nice Message",
  primaryEnter: (value: string) => {
    console.log(value);
  },
  primaryTextFieldProps: {
    actionOnBlur: "enter",
  },
  checkboxProps: {
    onClick: () => {
      console.log("check/uncheck");
    },
  },
};

// eslint-disable-next-line
export const CheckInvalidEditableListItem: any = Template.bind({});
CheckInvalidEditableListItem.args = {
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
  checkboxProps: {
    onClick: () => {
      console.log("check/uncheck");
    },
  },
};

// eslint-disable-next-line
export const ButtonsValidEditableListItem: any = Template.bind({});
ButtonsValidEditableListItem.args = {
  primary: "Hello",
  primaryLabel: "Nice Message",
  primaryEnter: (value: string) => {
    console.log(value);
  },
  primaryTextFieldProps: {
    actionOnBlur: "enter",
  },
  checkboxProps: {
    onClick: () => {
      console.log("check/uncheck");
    },
  },
  deleteButtonProps: {
    onClick: () => {
      console.log("delete");
    },
  },
};

// eslint-disable-next-line
export const ButtonsInvalidEditableListItem: any = Template.bind({});
ButtonsInvalidEditableListItem.args = {
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
  checkboxProps: {
    onClick: () => {
      console.log("check/uncheck");
    },
  },
  deleteButtonProps: {
    onClick: () => {
      console.log("delete");
    },
  },
};
