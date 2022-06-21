// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import { createRoot, Root } from "react-dom/client";
import { DragDropContext, DropResult, Droppable, Draggable } from "react-beautiful-dnd";
import { BaseList, BaseListItem } from "./packlets/mui-base-list";
import ListItemText from "@mui/material/ListItemText";

const rootDiv: HTMLElement = document.getElementById("root") as HTMLElement;
const root: Root = createRoot(rootDiv);

const onDragEnd = (result: DropResult): void => {
  console.log(result);
};

root.render(
  <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="id">
      {({ innerRef, droppableProps, placeholder }) => (
        <BaseList ref={innerRef} {...droppableProps}>
          {["foo", "bar", "qux"].map((txt, index) => (
            <Draggable draggableId={"id" + index} index={index} key={index}>
              {({ draggableProps, dragHandleProps, innerRef }) => (
                <BaseListItem ref={innerRef} key={index} {...draggableProps} {...dragHandleProps}>
                  <ListItemText primary={txt} secondary={"item" + index} />
                </BaseListItem>
              )}
            </Draggable>
          ))}
          {placeholder}
        </BaseList>
      )}
    </Droppable>
  </DragDropContext>
);
