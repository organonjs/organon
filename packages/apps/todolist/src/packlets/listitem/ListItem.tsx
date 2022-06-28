import React, { FunctionComponent } from "react";
import { ListItem as MuiListItem, IListItemProps as MuiListItemProps } from "../mui-list";
import { ListItemContent, IListItemContentProps } from "./ListItemContent";

export type IBaseListItemProps = MuiListItemProps;
export type IListItemProps = IListItemContentProps;
export type ListItem = FunctionComponent<IListItemProps & IBaseListItemProps>;

export const ListItem: ListItem = ({
  checked,
  checkboxProps,

  primary,
  primaryLabel,
  primaryHelperText,
  primaryError,
  primaryEnter,
  primaryTextFieldProps,
  listItemTextProps,

  deleteButtonProps,
  expandButtonProps,

  catchError,

  ...other
}) => {
  return (
    <MuiListItem {...other}>
      <ListItemContent
        checked={checked}
        checkboxProps={checkboxProps}
        primary={primary}
        primaryLabel={primaryLabel}
        primaryHelperText={primaryHelperText}
        primaryError={primaryError}
        primaryEnter={primaryEnter}
        primaryTextFieldProps={primaryTextFieldProps}
        listItemTextProps={listItemTextProps}
        deleteButtonProps={deleteButtonProps}
        expandButtonProps={expandButtonProps}
        catchError={catchError}
      />
    </MuiListItem>
  );
};
