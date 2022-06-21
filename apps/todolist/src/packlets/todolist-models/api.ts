export interface ITodoListItem {
  readonly position: number;
  readonly text: string;
  readonly valid: boolean;
}

export interface ITodoList {
  addItem(text: string): ITodoListItem;
  removeItem(position: number): boolean;
  updateItem(position: number, text: string): ITodoListItem | undefined;
  getItem(position: number): ITodoListItem | undefined;

  getItems(): readonly ITodoListItem[];
  setItems(texts: readonly string[]): void;
  clearItems(): void;
}
