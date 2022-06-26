import React, { FunctionComponent, ReactElement } from "react";
import IconButton, { IconButtonProps as BaseIconButtonProps } from "@mui/material/IconButton";
import { CatchError } from "../error-feedback";
import { buttonLabels } from "./button-label-map";
import { buttonComponents } from "./button-component-map";

export interface IIconButtonProps extends BaseIconButtonProps {
  catchError?: CatchError;
}

export type IconComponent = FunctionComponent<IIconButtonProps>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const makeButton = (label: string, IconComponent: FunctionComponent): IconComponent => {
  const Component: IconComponent = ({ onClick, catchError, ...other }): ReactElement => {
    return (
      <IconButton
        aria-label={label}
        onClick={catchError && onClick ? catchError(onClick) : onClick}
        {...other}
      >
        <IconComponent />
      </IconButton>
    );
  };

  Component.displayName = label[0].toUpperCase() + label.slice(1) + "Button";

  return Component;
};

export const AddButton: IconComponent = makeButton(buttonLabels.add, buttonComponents.add);
export const CloseButton: IconComponent = makeButton(buttonLabels.close, buttonComponents.close);
export const DeleteButton: IconComponent = makeButton(buttonLabels.delete, buttonComponents.delete);
export const OpenInNewButton: IconComponent = makeButton(buttonLabels.openInNew, buttonComponents.openInNew);
