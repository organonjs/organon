import React, { FunctionComponent } from "react";
import { DndList, IDroppablePropsWithoutChildren } from "../mui-base-dnd-list";
import { BaseList, IBaseListPropsWithoutRef } from "../mui-base-list";

export interface IListProps extends IBaseListPropsWithoutRef {
  droppableProps?: IDroppablePropsWithoutChildren | false;
}

export type List = FunctionComponent<IListProps>;

export const List: List = ({ children, droppableProps, ...other }) => {
  if (droppableProps) {
    return (
      <DndList droppableProps={droppableProps} {...other}>
        {children}
      </DndList>
    );
  }

  return <BaseList {...other}>{children}</BaseList>;
};
