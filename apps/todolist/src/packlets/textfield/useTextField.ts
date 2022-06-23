import {
  useState,
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  FocusEventHandler,
} from "react";

export type ActionOnBlurTextField = "none" | "clear" | "abort" | "reset" | "enter";

export const useTextField = (
  initialValue: string,
  enter: (value: string) => void,
  actionOnBlur: ActionOnBlurTextField = "none",
  remoteOnBlur?: FocusEventHandler<HTMLInputElement>
): {
  value: string;
  changeInput: ChangeEventHandler<HTMLInputElement>;
  keyInput: KeyboardEventHandler<HTMLInputElement>;
  clearValue: () => void;
  resetValue: () => void;
  abortValue: () => void;
  enterValue: () => void;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
} => {
  const [value, setValue] = useState(initialValue);

  const clearValue = (): void => setValue("");
  const resetValue = (): void => setValue(initialValue);

  const abortValue = (): void => {
    setValue(initialValue);
    enter(initialValue);
  };
  const enterValue = (): void => {
    setValue("");
    enter(value);
  };

  const changeInput = (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value);

  const keyInput = (event: KeyboardEvent<HTMLInputElement>): boolean => {
    switch (event.key) {
      case "Enter":
        enterValue();
        return true;

      case "Escape":
        abortValue();
        return true;

      default:
        return false;
    }
  };

  const onBlur: FocusEventHandler<HTMLInputElement> | undefined =
    actionOnBlur === "none"
      ? remoteOnBlur
      : !remoteOnBlur
      ? actionOnBlur === "enter"
        ? enterValue
        : actionOnBlur === "clear"
        ? clearValue
        : actionOnBlur === "reset"
        ? resetValue
        : abortValue
      : actionOnBlur === "enter"
      ? (e) => {
          enterValue();
          remoteOnBlur(e);
        }
      : actionOnBlur === "clear"
      ? (e) => {
          clearValue();
          remoteOnBlur(e);
        }
      : actionOnBlur === "reset"
      ? (e) => {
          resetValue();
          remoteOnBlur(e);
        }
      : (e) => {
          abortValue();
          remoteOnBlur(e);
        };

  return {
    value,
    changeInput,
    keyInput,
    clearValue,
    resetValue,
    abortValue,
    enterValue,
    onBlur,
  };
};
