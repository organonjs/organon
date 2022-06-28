// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import { createRoot, Root } from "react-dom/client";
import { DropResult } from "react-beautiful-dnd";
import { DndListWithContext } from "./packlets/mui-base-dnd-list";
import ListItemText from "@mui/material/ListItemText";

const rootDiv: HTMLElement = document.getElementById("root") as HTMLElement;
const root: Root = createRoot(rootDiv);

const onDragEnd = (result: DropResult): void => {
  console.log(result);
};

root.render(
  <DndListWithContext droppableProps={{ droppableId: "id" }} dndContextProps={{ onDragEnd }}>
    {["foo", "bar", "qux"].map((txt, index) => (
      <ListItemText key={index} primary={txt} secondary={"item" + index} />
    ))}
  </DndListWithContext>
);
