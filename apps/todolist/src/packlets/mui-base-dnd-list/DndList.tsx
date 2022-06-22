import React, { FunctionComponent } from "react";
import { DragDropContext, DragDropContextProps } from "react-beautiful-dnd";
import { DroppableList, IDroppableListProps } from "./DroppableList";
import { DraggableListItem } from "./DraggableListItem";

export type IDndContextPropsWithoutChildren = Omit<DragDropContextProps, "children">;

export interface IDndListProps extends IDroppableListProps {
  dndContextProps: IDndContextPropsWithoutChildren;
}

export type IDndList = FunctionComponent<IDndListProps>;

export const DndList: IDndList = ({ children, droppableProps, dndContextProps, ...other }) => {
  const { droppableId } = droppableProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sanitizedChildren: any[] = Array.isArray(children) ? children : [children];

  return (
    <DragDropContext {...dndContextProps}>
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
    </DragDropContext>
  );
};
