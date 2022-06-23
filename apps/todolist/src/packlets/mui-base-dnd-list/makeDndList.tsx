import React, { FunctionComponent, useState } from "react";
import { DropResult } from "react-beautiful-dnd";
import { ListModel, IListItemModel, IInputListItemModel } from "../list-model";
import { DndList, IDndContextPropsWithoutChildren } from "./DndList";
import { IDroppablePropsWithoutChildren } from "./DroppableList";
import { IBaseListPropsWithoutRef } from "../mui-base-list";
import ListItemText from "@mui/material/ListItemText";

interface IStatefulDndListProps extends IBaseListPropsWithoutRef {
  initItems: readonly IListItemModel[];
  dndContextProps?: IDndContextPropsWithoutChildren;
  droppableProps?: IDroppablePropsWithoutChildren;
}

type IStatefulDndList = FunctionComponent<IStatefulDndListProps>;

const isStringArray = (
  items: readonly string[] | readonly IInputListItemModel[]
): items is readonly string[] => {
  return typeof items[0] === "string";
};

export const makeDndList = (
  droppableId: string,
  items: readonly string[] | readonly IInputListItemModel[] = [],
  dispatchItems: (droppableId: string, items: readonly IInputListItemModel[]) => void
): FunctionComponent => {
  if (isStringArray(items)) {
    items = items.map((text, index): IInputListItemModel => ({ text, key: "" + index }));
  }

  const list = new ListModel(items);

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
