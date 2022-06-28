import React, { FunctionComponent } from "react";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { IListItemProps as MuiListItemProps } from "../mui-list";
import { ListItemText, IListItemTextProps, IBaseListItemTextProps } from "../listitem-text";
import { DeleteButton, OpenInNewButton, IIconButtonProps } from "../buttons";
import { CatchError } from "../error-feedback";

type IBaseListItemProps = MuiListItemProps;

export interface IListItemContentProps extends IListItemTextProps {
  checked?: boolean;
  checkboxProps?: Omit<CheckboxProps, "checked">;
  listItemTextProps?: IBaseListItemTextProps;
  deleteButtonProps?: IIconButtonProps;
  expandButtonProps?: IIconButtonProps;
  catchError?: CatchError;
}
export type ListItemContent = FunctionComponent<IListItemContentProps & IBaseListItemProps>;

export const ListItemContent: ListItemContent = ({
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
}) => {
  return (
    <>
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
    </>
  );
};
