import React, { FunctionComponent } from "react";
import { Draggable, DraggableProps, DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import clsx from "clsx";
import { BaseListItem, IBaseListItemPropsWithoutRef } from "../mui-base-list";

// The following allows { children, ...draggablePropsWithoutChildren } = draggableProps
export type IDraggablePropsWithoutChildren = Omit<DraggableProps, "children">;

export interface IDraggableListItemProps extends IBaseListItemPropsWithoutRef {
  draggableProps: IDraggablePropsWithoutChildren;
}
export type IDraggableListItem = FunctionComponent<IDraggableListItemProps>;

export const DraggableListItem: IDraggableListItem = ({ children, className, draggableProps, ...other }) => (
  <Draggable {...draggableProps}>
    {(
      { innerRef, draggableProps, dragHandleProps }: DraggableProvided,
      { isDragging }: DraggableStateSnapshot
    ): JSX.Element => (
      <BaseListItem
        className={clsx(className, { isDragging })}
        ref={innerRef}
        {...draggableProps}
        {...dragHandleProps}
        role="listitem"
        draggable
        {...other}
      >
        {children}
      </BaseListItem>
    )}
  </Draggable>
);
