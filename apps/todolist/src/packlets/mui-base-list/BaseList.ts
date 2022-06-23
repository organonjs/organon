import { default as List, ListProps } from "@mui/material/List";

export type IBaseListProps = ListProps;
export type BaseList = typeof List;

// The following allows { ref, ...listPropsWithoutRef } = listProps
export type IBaseListPropsWithoutRef = Omit<IBaseListProps, "ref">;

export const BaseList: BaseList = List;
