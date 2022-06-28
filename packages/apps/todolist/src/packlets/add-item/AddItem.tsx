import React, { FunctionComponent } from "react";
import { useAddItem } from "./useAddItem";
import { BaseAddItem } from "./BaseAddItem";
import { CatchError } from "../error-feedback";

export interface IAddItemProps {
  add: (value: string) => void;
  button?: boolean;
  catchError?: CatchError;
}

export type AddItem = FunctionComponent<IAddItemProps>;

export const AddItem: AddItem = ({ add, button = true, catchError }) => {
  const { value, changeInput, clearInputAndAdd, keyInput } = useAddItem(catchError ? catchError(add) : add);

  return (
    <BaseAddItem
      value={value}
      onChange={changeInput}
      onKeyPress={keyInput}
      buttonProps={button ? { onClick: clearInputAndAdd } : undefined}
    />
  );
};
