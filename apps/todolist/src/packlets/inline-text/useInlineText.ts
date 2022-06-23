import { useState } from "react";

export const useInlineText = (
  initialText: string,
  remoteEnter: (value: string) => void
): {
  text: string;
  edited: boolean;
  edit: () => void;
  enter: (value: string) => void;
} => {
  const [{ text, edited }, setState] = useState({ text: initialText, edited: false });

  const edit = (): void => setState({ text, edited: true });

  const enter = (text: string): void => {
    setState({ text, edited: false });
    remoteEnter(text);
  };

  return { text, edited, edit, enter };
};
