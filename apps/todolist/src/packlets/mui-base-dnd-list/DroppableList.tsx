import React, { FunctionComponent } from "react";
import { Droppable, DroppableProps, DroppableProvided, DroppableStateSnapshot } from "react-beautiful-dnd";
import clsx from "clsx";
import { BaseList, IBaseListPropsWithoutRef } from "../mui-base-list";

export type IDroppablePropsWithoutChildren = Omit<DroppableProps, "children">;

export interface IDroppableListProps extends IBaseListPropsWithoutRef {
  droppableProps: IDroppablePropsWithoutChildren;
}

export type DroppableList = FunctionComponent<IDroppableListProps>;

export const DroppableList: DroppableList = ({ children, className, droppableProps, ...other }) => (
  <Droppable {...droppableProps}>
    {(
      { innerRef, droppableProps, placeholder }: DroppableProvided,
      { isDraggingOver }: DroppableStateSnapshot
    ): JSX.Element => (
      <BaseList className={clsx(className, { isDraggingOver })} ref={innerRef} {...droppableProps} {...other}>
        {children}
        {placeholder}
      </BaseList>
    )}
  </Droppable>
);
