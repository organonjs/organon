import { useState, ChangeEvent, KeyboardEvent } from "react";

export const useAddItem = (
  add: (value: string) => void
): {
  value: string;
  changeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  clearInputAndAdd: () => void;
  keyInput: (event: KeyboardEvent<HTMLInputElement>) => boolean;
} => {
  const [value, setValue] = useState("");

  const changeInput = (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value);

  const clearInputAndAdd = (): void => {
    setValue("");
    add(value);
  };

  const keyInput = (event: KeyboardEvent<HTMLInputElement>): boolean => {
    if (event.key === "Enter") {
      clearInputAndAdd();
      return true;
    }

    return false;
  };

  return {
    value,
    changeInput,
    clearInputAndAdd,
    keyInput,
  };
};
