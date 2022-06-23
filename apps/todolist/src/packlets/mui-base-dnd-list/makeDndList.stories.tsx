import * as React from "react";
import { ComponentStory, ComponentMeta } from "@organon/storykit";
import { makeDndList } from "./makeDndList";
import { IListItemInputData } from "../list-model";

const dispatchItems = (droppableId: string, items: readonly IListItemInputData[]): void => {
  console.log(droppableId, items);
};

const DndList: React.FunctionComponent = makeDndList(
  "droppable",
  ["baba", "bebe", "bibi", "bobo", "bubu"],
  dispatchItems
);
type IDndList = typeof DndList;

export default {
  title: "Functional Drag&Drop List",
  component: DndList,
} as ComponentMeta<IDndList>;

const Template: ComponentStory<IDndList> = (args) => <DndList {...args} />;

// eslint-disable-next-line
export const ReorderableList: any = Template.bind({});
ReorderableList.args = {};
