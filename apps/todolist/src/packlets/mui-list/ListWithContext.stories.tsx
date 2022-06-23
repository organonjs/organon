import * as React from "react";
import { DropResult } from "react-beautiful-dnd";
import { ComponentStory, ComponentMeta } from "@organon/storykit";
import { ListWithContext } from "./ListWithContext";
import { IDndContextPropsWithoutChildren, IDroppablePropsWithoutChildren } from "../mui-base-dnd-list";
import ListItemText from "@mui/material/ListItemText";

export default {
  title: "MUI mixed Drag&Drop List",
  component: ListWithContext,
} as ComponentMeta<ListWithContext>;

const Template: ComponentStory<ListWithContext> = (args) => <ListWithContext {...args} />;

const onDragEnd = (result: DropResult): void => {
  console.log(result);
};

const droppableProps: IDroppablePropsWithoutChildren = { droppableId: "id" };
const dndContextProps: IDndContextPropsWithoutChildren = { onDragEnd };
const commonProps: {
  droppableProps: IDroppablePropsWithoutChildren;
  dndContextProps: IDndContextPropsWithoutChildren;
} = { droppableProps, dndContextProps };

// eslint-disable-next-line
export const ManyItemsDndList: any = Template.bind({});
ManyItemsDndList.args = {
  children: [
    <ListItemText key={0} primary={"one"} secondary={"item0"} />,
    <ListItemText key={1} primary={"two"} secondary={"item1"} />,
    <ListItemText key={2} primary={"three"} secondary={"item2"} />,
    <ListItemText key={3} primary={"four"} secondary={"item3"} />,
    <ListItemText key={4} primary={"five"} secondary={"item4"} />,
    <ListItemText key={5} primary={"six"} secondary={"item5"} />,
  ],
  ...commonProps,
};

// eslint-disable-next-line
export const ManyItemsStaticList: any = Template.bind({});
ManyItemsStaticList.args = {
  children: [
    <ListItemText key={0} primary={"one"} secondary={"item0"} />,
    <ListItemText key={1} primary={"two"} secondary={"item1"} />,
    <ListItemText key={2} primary={"three"} secondary={"item2"} />,
    <ListItemText key={3} primary={"four"} secondary={"item3"} />,
    <ListItemText key={4} primary={"five"} secondary={"item4"} />,
    <ListItemText key={5} primary={"six"} secondary={"item5"} />,
  ],
};
