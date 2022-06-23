export interface IListItemInputData {
  readonly key: string;
  readonly text: string;
}

export interface IListItemData extends IListItemInputData {
  readonly position: number;
  readonly valid: boolean;
}

export interface IListManager {
  addItem(item: IListItemInputData): IListItemData;
  removeItem(position: number): boolean;
  updateItem(position: number, text: string): IListItemData | undefined;
  getItem(position: number): IListItemData | undefined;
  moveItem(fromPosition: number, toPosition: number): IListItemData | undefined;

  getItems(): readonly IListItemData[];
  setItems(texts: readonly IListItemInputData[]): void;
  clearItems(): void;
}
