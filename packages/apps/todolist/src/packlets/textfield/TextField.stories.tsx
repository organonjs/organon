import * as React from "react";
import { ComponentStory, ComponentMeta } from "@organon/storykit";
import { TextField } from "./TextField";
import { ActionOnBlurTextField } from "./useTextField";

const makeArgs = (
  defaultValue: string,
  actionOnBlur: ActionOnBlurTextField = "none"
): {
  defaultValue: string;
  enter: (text: string) => void;
  actionOnBlur: ActionOnBlurTextField;
  onBlur: () => void;
} => {
  const enter = (text: string): void => {
    console.log("ENTER text:", text);
  };

  return {
    defaultValue,
    enter,
    actionOnBlur,
    onBlur: () => {
      console.log("BLUR & action on blur: ", actionOnBlur);
    },
  };
};

export default {
  title: "Text Field",
  component: TextField,
} as ComponentMeta<TextField>;

const Template: ComponentStory<TextField> = (args) => <TextField {...args} />;

// eslint-disable-next-line
export const DoNothingOnBlurEmptyTextField: any = Template.bind({});
DoNothingOnBlurEmptyTextField.args = makeArgs("");

// eslint-disable-next-line
export const ClearOnBlurEmptyTextField: any = Template.bind({});
ClearOnBlurEmptyTextField.args = makeArgs("", "clear");

// eslint-disable-next-line
export const ResetOnBlurEmptyTextField: any = Template.bind({});
ResetOnBlurEmptyTextField.args = makeArgs("", "reset");

// eslint-disable-next-line
export const AbortOnBlurEmptyTextField: any = Template.bind({});
AbortOnBlurEmptyTextField.args = makeArgs("", "abort");

// eslint-disable-next-line
export const EnterOnBlurEmptyTextField: any = Template.bind({});
EnterOnBlurEmptyTextField.args = makeArgs("", "enter");

// eslint-disable-next-line
export const DoNothingOnBlurPrefilledTextField: any = Template.bind({});
DoNothingOnBlurPrefilledTextField.args = makeArgs("foobar");

// eslint-disable-next-line
export const ClearOnBlurPrefilledTextField: any = Template.bind({});
ClearOnBlurPrefilledTextField.args = makeArgs("foobar", "clear");

// eslint-disable-next-line
export const ResetOnBlurPrefilledTextField: any = Template.bind({});
ResetOnBlurPrefilledTextField.args = makeArgs("foobar", "reset");

// eslint-disable-next-line
export const AbortOnBlurPrefilledTextField: any = Template.bind({});
AbortOnBlurPrefilledTextField.args = makeArgs("foobar", "abort");

// eslint-disable-next-line
export const EnterOnBlurPrefilledTextField: any = Template.bind({});
EnterOnBlurPrefilledTextField.args = makeArgs("foobar", "enter");
