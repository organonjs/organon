export interface IListItemModel {
  readonly position: number;
  readonly text: string;
  readonly valid: boolean;
}

export interface IListModel {
  addItem(text: string): IListItemModel;
  removeItem(position: number): boolean;
  updateItem(position: number, text: string): IListItemModel | undefined;
  getItem(position: number): IListItemModel | undefined;
  moveItem(fromPosition: number, toPosition: number): IListItemModel | undefined;

  getItems(): readonly IListItemModel[];
  setItems(texts: readonly string[]): void;
  clearItems(): void;
}
