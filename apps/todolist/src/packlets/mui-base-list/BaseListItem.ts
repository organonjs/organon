import { default as ListItem, ListItemProps } from "@mui/material/ListItem";

export type IBaseListItemProps = ListItemProps<"li", { button?: false }>;
export type IBaseListItem = typeof ListItem;

// The following allows { ref, ...listItemPropsWithoutRef } = listItemProps
export type IBaseListItemPropsWithoutRef = Omit<IBaseListItemProps, "ref">;

export const BaseListItem: IBaseListItem = ListItem;
