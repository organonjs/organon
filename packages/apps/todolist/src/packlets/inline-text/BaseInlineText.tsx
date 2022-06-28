import React, { FunctionComponent } from "react";
import Typography from "@mui/material/Typography";
import { TypographyVariant } from "@mui/material/styles";
import { TextField, IBaseTextFieldProps } from "../textfield";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { ErrorTooltip } from "../error-tooltip";

export interface IBaseInlineTextProps {
  text: string;
  textClassName: string;
  textVariant: TypographyVariant;
  edited?: boolean;
  label?: string;
  helperText?: string;
  error?: boolean;
  edit: () => void;
  enter: (value: string) => void;
  textFieldProps?: Omit<IBaseTextFieldProps, "enter" | "label" | "helperText" | "error">;
}

export const BaseInlineText: FunctionComponent<IBaseInlineTextProps> = ({
  text,
  textClassName,
  textVariant,
  edited,
  label,
  helperText,
  error,
  edit,
  enter,
  textFieldProps,
}) => {
  if (edited) {
    return (
      <TextField
        defaultValue={text}
        label={label}
        helperText={helperText}
        error={error}
        enter={enter}
        {...textFieldProps}
      />
    );
  }

  if (error) {
    const alert = (
      <Alert variant="outlined" severity="error" onClick={edit}>
        <AlertTitle>{text}</AlertTitle>
      </Alert>
    );

    return helperText ? <ErrorTooltip title={helperText}>{alert}</ErrorTooltip> : alert;
  }

  return (
    <Typography
      variant={textVariant}
      className={textClassName}
      component="span"
      display="block"
      onClick={edit}
    >
      {text}
    </Typography>
  );
};
