import React, { FunctionComponent, useState } from "react";
import { DropResult } from "react-beautiful-dnd";
import { ListManager, IListItemData, IListItemInputData } from "../list-manager";
import { DndList, IDndContextPropsWithoutChildren } from "./DndList";
import { IDroppablePropsWithoutChildren } from "./DroppableList";
import { IBaseListPropsWithoutRef } from "../mui-base-list";
import ListItemText from "@mui/material/ListItemText";

interface IStatefulDndListProps extends IBaseListPropsWithoutRef {
  initItems: readonly IListItemData[];
  dndContextProps?: IDndContextPropsWithoutChildren;
  droppableProps?: IDroppablePropsWithoutChildren;
}

type IStatefulDndList = FunctionComponent<IStatefulDndListProps>;

const isStringArray = (
  items: readonly string[] | readonly IListItemInputData[]
): items is readonly string[] => {
  return typeof items[0] === "string";
};

export const makeDndList = (
  droppableId: string,
  items: readonly string[] | readonly IListItemInputData[] = [],
  dispatchItems: (droppableId: string, items: readonly IListItemInputData[]) => void
): FunctionComponent => {
  if (isStringArray(items)) {
    items = items.map((text, index): IListItemInputData => ({ text, key: "" + index }));
  }

  const list = new ListManager(items);

  const StatefulDndList: IStatefulDndList = ({ initItems, dndContextProps, droppableProps, ...other }) => {
    const [items, setItems] = useState(initItems);

    const onDragEnd = (result: DropResult): void => {
      const { source, destination } = result;

      if (!destination) {
        return;
      }

      if (list.moveItem(source.index, destination.index)) {
        const newItems = list.getItems();
        setItems(newItems);
        dispatchItems(droppableId, newItems);
      }
    };

    return (
      <DndList dndContextProps={{ onDragEnd }} droppableProps={{ droppableId }} {...other}>
        {items.map((item) => (item.valid ? <ListItemText key={item.key} primary={item.text} /> : undefined))}
      </DndList>
    );
  };

  const DndListComponent: FunctionComponent = (props) => (
    <StatefulDndList initItems={list.getItems()} {...props} />
  );

  return DndListComponent;
};
