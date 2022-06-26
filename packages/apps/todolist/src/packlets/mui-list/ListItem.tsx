import React, { FunctionComponent } from "react";
import { DraggableListItem, IDraggablePropsWithoutChildren } from "../mui-base-dnd-list";
import { BaseListItem, IBaseListItemPropsWithoutRef } from "../mui-base-list";

export interface IListItemProps extends IBaseListItemPropsWithoutRef {
  draggableProps?: IDraggablePropsWithoutChildren | false;
}

export type ListItem = FunctionComponent<IListItemProps>;

export const ListItem: ListItem = ({ children, draggableProps, ...other }) => {
  if (draggableProps) {
    return (
      <DraggableListItem draggableProps={draggableProps} {...other}>
        {children}
      </DraggableListItem>
    );
  }

  return <BaseListItem {...other}>{children}</BaseListItem>;
};
