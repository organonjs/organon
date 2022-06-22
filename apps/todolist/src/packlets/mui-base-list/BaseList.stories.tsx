import * as React from "react";

import { ComponentStory, ComponentMeta } from "@organon/storykit";

import { BaseList, IBaseList } from "./BaseList";
import { BaseListItem } from "./BaseListItem";
import ListItemText from "@mui/material/ListItemText";

export default {
  title: "MUI base List",
  component: BaseList,
} as ComponentMeta<IBaseList>;

const Template: ComponentStory<IBaseList> = (args) => <BaseList {...args} />;

// eslint-disable-next-line
export const EmptyList: any = Template.bind({});
EmptyList.args = {
  children: [],
};

// eslint-disable-next-line
export const OneItemList: any = Template.bind({});
OneItemList.args = {
  children: [
    <BaseListItem key={0}>
      <ListItemText primary={"one"} secondary={"item0"} />
    </BaseListItem>,
  ],
};

// eslint-disable-next-line
export const TwoItemsList: any = Template.bind({});
TwoItemsList.args = {
  children: [
    <BaseListItem key={0}>
      <ListItemText primary={"one"} secondary={"item0"} />
    </BaseListItem>,
    <BaseListItem key={1}>
      <ListItemText primary={"two"} secondary={"item1"} />
    </BaseListItem>,
  ],
};

// eslint-disable-next-line
export const ManyItemsList: any = Template.bind({});
ManyItemsList.args = {
  children: [
    <BaseListItem key={0}>
      <ListItemText primary={"one"} secondary={"item0"} />
    </BaseListItem>,
    <BaseListItem key={1}>
      <ListItemText primary={"two"} secondary={"item1"} />
    </BaseListItem>,
    <BaseListItem key={2}>
      <ListItemText primary={"three"} secondary={"item2"} />
    </BaseListItem>,
    <BaseListItem key={3}>
      <ListItemText primary={"four"} secondary={"item3"} />
    </BaseListItem>,
    <BaseListItem key={4}>
      <ListItemText primary={"five"} secondary={"item4"} />
    </BaseListItem>,
    <BaseListItem key={5}>
      <ListItemText primary={"six"} secondary={"item5"} />
    </BaseListItem>,
  ],
};
