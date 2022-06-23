import React, { FunctionComponent } from "react";
import {
  ListItemText as MuiListItemText,
  ListItemTextProps as MuiListItemTextProps,
  TextFieldProps,
  TypographyVariant,
} from "@mui/material";
import { InlineText } from "../inline-text";

export interface IListItemTextProps extends Omit<MuiListItemTextProps, "primary"> {
  primary: string;
  primaryVariant?: TypographyVariant;
  primaryLabel?: string;
  primaryHelperText?: string;
  primaryError?: boolean;
  primaryEnter?: (value: string) => void;
  primaryTextFieldProps?: TextFieldProps;
}

export type ListItemText = FunctionComponent<IListItemTextProps>;

export const ListItemText: ListItemText = ({
  primary,
  primaryVariant = "body1",
  primaryLabel,
  primaryHelperText,
  primaryError,
  primaryEnter,
  primaryTextFieldProps,
  ...other
}) => {
  return primaryEnter ? (
    <MuiListItemText
      disableTypography
      primary={
        <InlineText
          text={primary}
          textClassName="MuiListItemText-primary"
          textVariant={primaryVariant}
          label={primaryLabel}
          helperText={primaryHelperText}
          error={primaryError}
          enter={primaryEnter}
          textFieldProps={primaryTextFieldProps}
        />
      }
      {...other}
    />
  ) : (
    <MuiListItemText primary={primary} {...other} />
  );
};

export default ListItemText;
