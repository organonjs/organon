import React, { FunctionComponent } from "react";
import Tooltip, { TooltipProps } from "@mui/material/Tooltip";

export type ErrorTooltip = FunctionComponent<TooltipProps>;

const backgroundColor: string = "error.dark";
const color: string = "white";
const maxWidth: number = 220;
const borderWidth: string = "1px";
const borderStyle: string = "solid";
const borderColor: string = "error.light";

export const ErrorTooltip: ErrorTooltip = ({ ...other }) => {
  return (
    <Tooltip
      {...other}
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor,
            color,
            maxWidth,
            borderWidth,
            borderStyle,
            borderColor,
          },
        },
        arrow: {
          sx: {
            color: backgroundColor,
          },
        },
      }}
      arrow
    />
  );
};
