import React, { FunctionComponent, ReactElement, MouseEvent } from "react";
import { ComponentStory, ComponentMeta } from "@organon/storykit";
import { AddButton, CloseButton, DeleteButton, OpenInNewButton, IIconButtonProps } from "./buttons";

const Buttons: FunctionComponent<IIconButtonProps> = ({ onClick }): ReactElement => {
  return (
    <>
      <AddButton onClick={onClick} title="add" />
      <CloseButton onClick={onClick} title="close" />
      <DeleteButton onClick={onClick} title="delete" />
      <OpenInNewButton onClick={onClick} title="openInNew" />
    </>
  );
};

type Buttons = typeof Buttons;

export default {
  title: "Buttons",
  component: Buttons,
} as ComponentMeta<Buttons>;

const Template: ComponentStory<Buttons> = (args) => <Buttons {...args} />;

// eslint-disable-next-line
export const NoArgsButtons: any = Template.bind({});
NoArgsButtons.args = {};

// eslint-disable-next-line
export const OnClickButtons: any = Template.bind({});
OnClickButtons.args = {
  onClick: (e: MouseEvent) => {
    console.log(e);
  },
};
