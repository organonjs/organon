import React, { FunctionComponent } from "react";
import { BaseInlineText, IBaseInlineTextProps } from "./BaseInlineText";
import { useInlineText } from "./useInlineText";

export type IInlineTextProps = Omit<IBaseInlineTextProps, "edited" | "edit">;
export type InlineText = FunctionComponent<IInlineTextProps>;

export const InlineText: InlineText = ({
  text: initialText,
  textClassName,
  textVariant,
  label,
  helperText,
  error,
  enter: remoteEnter,
  textFieldProps,
}) => {
  const { text, edited, edit, enter } = useInlineText(initialText, remoteEnter);

  return (
    <BaseInlineText
      text={text}
      textClassName={textClassName}
      textVariant={textVariant}
      edited={edited}
      label={label}
      helperText={helperText}
      error={error}
      edit={edit}
      enter={enter}
      textFieldProps={textFieldProps}
    />
  );
};

export default InlineText;
