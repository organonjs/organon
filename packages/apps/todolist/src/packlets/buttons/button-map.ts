export enum ButtonKey {
  add = "add",
  close = "close",
  delete = "delete",
  openInNew = "openInNew",
}

export type ButtonMap<T> = {
  [key in ButtonKey]: T;
};
