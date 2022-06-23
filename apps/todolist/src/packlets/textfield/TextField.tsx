import React, { FunctionComponent } from "react";

import BaseTextField, { StandardTextFieldProps } from "@mui/material/TextField";
import { useTextField, ActionOnBlurTextField } from "./useTextField";

export interface ITextFieldProps extends StandardTextFieldProps {
  defaultValue?: string;
  enter: (value: string) => void;
  actionOnBlur?: ActionOnBlurTextField;
}

export type IBaseTextFieldProps = Omit<StandardTextFieldProps, "defaultValue" | "variant">;
export type TextField = FunctionComponent<ITextFieldProps>;

export const TextField: TextField = ({
  defaultValue = "",
  enter,
  actionOnBlur = "none",
  onBlur: remoteOnBlur,
  ...other
}) => {
  const { value, changeInput, keyInput, onBlur } = useTextField(
    defaultValue,
    enter,
    actionOnBlur,
    remoteOnBlur
  );

  return (
    <BaseTextField
      variant="standard"
      autoFocus
      fullWidth
      value={value}
      onChange={changeInput}
      onKeyDown={keyInput}
      onBlur={onBlur}
      {...other}
    />
  );
};
