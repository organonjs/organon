import AddOutlined from "@mui/icons-material/AddOutlined";
import CloseOutlined from "@mui/icons-material/CloseOutlined";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import OpenInNewOutlined from "@mui/icons-material/OpenInNewOutlined";
import { ButtonMap } from "./button-map";

export type ButtonComponent = typeof AddOutlined;

export const buttonComponents: ButtonMap<ButtonComponent> = Object.freeze({
  add: AddOutlined,
  close: CloseOutlined,
  delete: DeleteOutlined,
  openInNew: OpenInNewOutlined,
});
