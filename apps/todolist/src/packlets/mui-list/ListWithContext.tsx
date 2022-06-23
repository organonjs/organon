import React, { FunctionComponent } from "react";
import { DragDropContext, DragDropContextProps } from "react-beautiful-dnd";
import { List, IListProps } from "./List";

export interface IListWithContextProps extends IListProps {
  dndContextProps: Omit<DragDropContextProps, "children"> | false;
}

export type ListWithContext = FunctionComponent<IListWithContextProps>;

export const ListWithContext: ListWithContext = ({ children, dndContextProps, droppableProps, ...other }) => {
  if (droppableProps && dndContextProps) {
    return (
      <DragDropContext {...dndContextProps}>
        <List droppableProps={droppableProps} {...other}>
          {children}
        </List>
      </DragDropContext>
    );
  }

  return <List {...other}>{children}</List>;
};
