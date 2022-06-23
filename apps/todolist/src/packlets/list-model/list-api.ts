export interface IInputListItemModel {
  readonly key: string;
  readonly text: string;
}

export interface IListItemModel extends IInputListItemModel {
  readonly position: number;
  readonly valid: boolean;
}

export interface IListModel {
  addItem(item: IInputListItemModel): IListItemModel;
  removeItem(position: number): boolean;
  updateItem(position: number, text: string): IListItemModel | undefined;
  getItem(position: number): IListItemModel | undefined;
  moveItem(fromPosition: number, toPosition: number): IListItemModel | undefined;

  getItems(): readonly IListItemModel[];
  setItems(texts: readonly IInputListItemModel[]): void;
  clearItems(): void;
}
