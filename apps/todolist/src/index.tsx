// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import { createRoot, Root } from "react-dom/client";
import { BaseList, BaseListItem } from "./packlets/mui-base-list";
import ListItemText from "@mui/material/ListItemText";

const rootDiv: HTMLElement = document.getElementById("root") as HTMLElement;
const root: Root = createRoot(rootDiv);

root.render(
  <BaseList>
    {["foo", "bar", "qux"].map((txt, i) => (
      <BaseListItem key={i}>
        <ListItemText primary={txt} secondary={"item" + i} />
      </BaseListItem>
    ))}
  </BaseList>
);