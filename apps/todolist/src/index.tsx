// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import { createRoot, Root } from "react-dom/client";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { DraggableListItem, DroppableList } from "./packlets/mui-base-dnd-list";
import ListItemText from "@mui/material/ListItemText";

const rootDiv: HTMLElement = document.getElementById("root") as HTMLElement;
const root: Root = createRoot(rootDiv);

const onDragEnd = (result: DropResult): void => {
  console.log(result);
};

root.render(
  <DragDropContext onDragEnd={onDragEnd}>
    <DroppableList droppableProps={{ droppableId: "id" }}>
      {["foo", "bar", "qux"].map((txt, index) => (
        <DraggableListItem key={index} draggableProps={{ draggableId: "item" + index, index }}>
          <ListItemText primary={txt} secondary={"item" + index} />
        </DraggableListItem>
      ))}
    </DroppableList>
  </DragDropContext>
);
