import React from "react";
import { ComponentStory, ComponentMeta } from "@organon/storykit";
import { AddItem } from "./AddItem";

export default {
  title: "AddItem",
  component: AddItem,
} as ComponentMeta<AddItem>;

const Template: ComponentStory<AddItem> = (args) => <AddItem {...args} />;

// eslint-disable-next-line
export const ButtonAddItem: any = Template.bind({});
ButtonAddItem.args = {
  add: (value: string) => {
    console.log(value);
  },
};

// eslint-disable-next-line
export const NoButtonAddItem: any = Template.bind({});
NoButtonAddItem.args = {
  button: false,
  add: (value: string) => {
    console.log(value);
  },
};
