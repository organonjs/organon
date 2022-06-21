import { ITodoListItem, ITodoList } from "./api";

export class TodoListModel implements ITodoList {
  #items: ITodoListItem[];

  public constructor(texts: readonly string[] = []) {
    this.#items = texts.map((text, position) => TodoListModel.makeItem(position, text));
  }

  public addItem(text: string): ITodoListItem {
    const item = TodoListModel.makeItem(this.#items.length, text);
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

  public updateItem(position: number, text: string): ITodoListItem | undefined {
    let item = this.#items[position];
    if (item !== undefined) {
      item = TodoListModel.makeItem(position, text);
      this.#items[position] = item;
      return item;
    }
  }

  public getItem(position: number): ITodoListItem | undefined {
    const item = this.#items[position];
    if (item !== undefined) {
      return item;
    }
  }

  public getItems(): readonly ITodoListItem[] {
    return Array.from(this.#items);
  }

  public setItems(texts: readonly string[]): void {
    this.#items.length = 0;
    for (const [position, text] of texts.entries()) {
      this.#items.push(TodoListModel.makeItem(position, text));
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

  public static makeItem(position: number, text: string): ITodoListItem {
    const valid = TodoListModel.validate(text);
    text = valid ? TodoListModel.sanitize(text) : "";
    return Object.freeze({ position, text, valid });
  }
}
