import { IInputListItemModel, IListItemModel, IListModel } from "./list-api";

export class ListModel implements IListModel {
  #items: IListItemModel[];

  public constructor(items: readonly IInputListItemModel[] = []) {
    this.#items = items.map((item, position) => ListModel.makeItem(position, item));
  }

  public addItem(inputItem: IInputListItemModel): IListItemModel {
    const item = ListModel.makeItem(this.#items.length, inputItem);
    this.#items.push(item);
    return item;
  }

  public removeItem(position: number): boolean {
    const item = this.getItem(position);
    if (item !== undefined) {
      this.#items.splice(position, 1);
      return true;
    }
    return false;
  }

  public updateItem(position: number, text: string): IListItemModel | undefined {
    let item = this.#items[position];
    if (item !== undefined) {
      item = ListModel.makeItem(position, { text, key: item.key });
      this.#items[position] = item;
      return item;
    }
  }

  public getItem(position: number): IListItemModel | undefined {
    const item = this.#items[position];
    if (item !== undefined) {
      return item;
    }
  }

  public moveItem(fromPosition: number, toPosition: number): IListItemModel | undefined {
    if (fromPosition === toPosition) {
      return;
    }

    const fromItem = this.#items[fromPosition];

    if (!fromItem || !this.#items[toPosition]) {
      return;
    }

    this.#items.splice(fromPosition, 1);
    this.#items.splice(toPosition, 0, fromItem);

    this.#items = this.#items.map(({ text, valid, key }, position) =>
      Object.freeze({ position, text, valid, key })
    );

    return this.#items[toPosition];
  }

  public getItems(): readonly IListItemModel[] {
    return Array.from(this.#items);
  }

  public setItems(items: readonly IInputListItemModel[]): void {
    this.#items.length = 0;
    for (const [position, item] of items.entries()) {
      this.#items.push(ListModel.makeItem(position, item));
    }
  }

  public clearItems(): void {
    this.#items.length = 0;
  }

  public static validate(text: string): boolean {
    return typeof text === "string";
  }

  public static sanitize(text: string): string {
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  public static makeItem(position: number, { text, key }: IInputListItemModel): IListItemModel {
    const valid = ListModel.validate(text);
    text = valid ? ListModel.sanitize(text) : "";
    return Object.freeze({ position, text, valid, key });
  }
}
