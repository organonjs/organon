import React, { FunctionComponent } from "react";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { ListItem as MuiListItem, IListItemProps as MuiListItemProps } from "../mui-list";
import { ListItemText, IListItemTextProps, IBaseListItemTextProps } from "../listitem-text";
import { DeleteButton, OpenInNewButton, IIconButtonProps } from "../buttons";
import { CatchError } from "../error-feedback";

export type IBaseListItemProps = MuiListItemProps;

export interface IListItemProps extends IListItemTextProps {
  itemId: string;
  checked?: boolean;
  checkboxProps?: Omit<CheckboxProps, "checked">;
  listItemTextProps?: IBaseListItemTextProps;
  deleteButtonProps?: IIconButtonProps;
  expandButtonProps?: IIconButtonProps;
  catchError?: CatchError;
}
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
      {checkboxProps && <Checkbox checked={checked} {...checkboxProps} />}
      <ListItemText
        primary={primary}
        primaryLabel={primaryLabel}
        primaryHelperText={primaryHelperText}
        primaryError={primaryError}
        primaryEnter={catchError && primaryEnter ? catchError(primaryEnter) : primaryEnter}
        primaryTextFieldProps={primaryTextFieldProps}
        {...listItemTextProps}
      />
      {expandButtonProps && <OpenInNewButton {...expandButtonProps} catchError={catchError} />}
      {deleteButtonProps && <DeleteButton {...deleteButtonProps} catchError={catchError} />}
    </MuiListItem>
  );
};
