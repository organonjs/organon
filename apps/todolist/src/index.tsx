// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import * as ReactDOM from "react-dom";
import BaseList from "./BaseList";
import BaseListItem from "./BaseListItem";
import ListItemText from "@mui/material/ListItemText";

const rootDiv: HTMLElement = document.getElementById("root") as HTMLElement;
ReactDOM.render(
  <BaseList>
    {["foo", "bar", "qux"].map((txt, i) => (
      <BaseListItem key={i}>
        <ListItemText primary={txt} secondary={"item" + i} />
      </BaseListItem>
    ))}
  </BaseList>,
  rootDiv
);
