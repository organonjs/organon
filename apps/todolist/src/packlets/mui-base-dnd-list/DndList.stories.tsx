import * as React from "react";
import { DropResult } from "react-beautiful-dnd";
import { ComponentStory, ComponentMeta } from "@organon/storykit";
import { DndList, IDndContextPropsWithoutChildren } from "./DndList";
import { IDroppablePropsWithoutChildren } from "./DroppableList";
import ListItemText from "@mui/material/ListItemText";

export default {
  title: "MUI Drag&Drop List",
  component: DndList,
} as ComponentMeta<DndList>;

const Template: ComponentStory<DndList> = (args) => <DndList {...args} />;

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
export const EmptyList: any = Template.bind({});
EmptyList.args = {
  children: [],
  ...commonProps,
};

// eslint-disable-next-line
export const OneItemList: any = Template.bind({});
OneItemList.args = {
  children: [<ListItemText key={0} primary={"one"} secondary={"item0"} />],
  ...commonProps,
};

// eslint-disable-next-line
export const TwoItemsList: any = Template.bind({});
TwoItemsList.args = {
  children: [
    <ListItemText key={0} primary={"one"} secondary={"item0"} />,
    <ListItemText key={1} primary={"two"} secondary={"item1"} />,
  ],
  ...commonProps,
};

// eslint-disable-next-line
export const ManyItemsList: any = Template.bind({});
ManyItemsList.args = {
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
