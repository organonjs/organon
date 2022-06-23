import React, { FunctionComponent } from "react";
import { DroppableList, IDroppableListProps } from "./DroppableList";
import { DraggableListItem } from "./DraggableListItem";

export type DndList = FunctionComponent<IDroppableListProps>;

export const DndList: DndList = ({ children, droppableProps, ...other }) => {
  const { droppableId } = droppableProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sanitizedChildren: any[] = Array.isArray(children) ? children : [children];

  return (
    <DroppableList droppableProps={droppableProps} {...other}>
      {sanitizedChildren.map((child, index) => (
        <DraggableListItem
          key={index}
          draggableProps={{ draggableId: `droppable_${droppableId}:draggable_${index}`, index }}
        >
          {child}
        </DraggableListItem>
      ))}
    </DroppableList>
  );
};
