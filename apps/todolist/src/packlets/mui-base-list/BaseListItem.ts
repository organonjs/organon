import { default as ListItem, ListItemProps } from "@mui/material/ListItem";

export type BaseListItemProps = ListItemProps<"li", { button?: false }>;
export type BaseListItemPropsWithoutRef = Omit<BaseListItemProps, "ref">;
export type BaseListItem = typeof ListItem;

export const BaseListItem: BaseListItem = ListItem;
export default BaseListItem;
