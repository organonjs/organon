/* eslint-disable @typescript-eslint/no-explicit-any */
import { TodoListModel } from "../todolist-model";

describe(`TodoListModel`, () => {
  describe(`used with valid data`, () => {
    it(`can add an item`, () => {
      const todolist = new TodoListModel(["foo", "bar", "qux"]);

      expect(todolist.addItem("quux")).toEqual({ position: 3, text: "quux", valid: true });
    });

    it(`can update an item`, () => {
      const todolist = new TodoListModel(["foo", "bar", "qux"]);

      expect(todolist.updateItem(1, "quux")).toEqual({ position: 1, text: "quux", valid: true });
    });

    it(`can remove an item`, () => {
      const todolist = new TodoListModel(["foo", "bar", "qux"]);

      expect(todolist.removeItem(1)).toBe(true);
      expect(todolist.removeItem(2)).toBe(false);
    });

    it(`can get an item`, () => {
      const todolist = new TodoListModel(["foo", "bar", "qux"]);

      expect(todolist.getItem(2)).toEqual({ position: 2, text: "qux", valid: true });
      expect(todolist.getItem(4)).toBeUndefined();
    });

    it(`can get all items`, () => {
      const todolist = new TodoListModel(["foo", "bar", "qux"]);

      expect(todolist.getItems()).toEqual(
        ["foo", "bar", "qux"].map((text, position) => ({ position, text, valid: true }))
      );
    });

    it(`can set all items`, () => {
      const todolist = new TodoListModel();
      expect(todolist.getItems()).toHaveLength(0);

      todolist.setItems(["foo", "bar", "qux"]);
      expect(todolist.getItems()).toEqual(
        ["foo", "bar", "qux"].map((text, position) => ({ position, text, valid: true }))
      );
    });

    it(`can clear all items`, () => {
      const todolist = new TodoListModel(["foo", "bar", "qux"]);
      expect(todolist.getItems()).toEqual(
        ["foo", "bar", "qux"].map((text, position) => ({ position, text, valid: true }))
      );

      todolist.clearItems();
      expect(todolist.getItems()).toHaveLength(0);
    });
  });

  describe(`used with malicious or invalid data`, () => {
    it(`can add an item`, () => {
      const todolist = new TodoListModel(["foo", "bar", "qux"]);

      expect(todolist.addItem(1 as any)).toEqual({ position: 3, text: "", valid: false });
      expect(todolist.addItem("<script></script>")).toEqual({
        position: 4,
        text: "&lt;script&gt;&lt;/script&gt;",
        valid: true,
      });
    });

    it(`can update an item`, () => {
      const todolist = new TodoListModel(["foo", "bar", "qux"]);

      expect(todolist.updateItem(1, 1 as any)).toEqual({ position: 1, text: "", valid: false });
      expect(todolist.updateItem(1, "<script></script>")).toEqual({
        position: 1,
        text: "&lt;script&gt;&lt;/script&gt;",
        valid: true,
      });
    });

    it(`can remove an item`, () => {
      const todolist = new TodoListModel(["foo", 1 as any, "<script></script>"]);

      expect(todolist.removeItem(1)).toBe(true);
      expect(todolist.removeItem(2)).toBe(false);
    });

    it(`can get an item`, () => {
      const todolist = new TodoListModel(["foo", 1 as any, "<script></script>"]);

      expect(todolist.getItem(2)).toEqual({
        position: 2,
        text: "&lt;script&gt;&lt;/script&gt;",
        valid: true,
      });
      expect(todolist.getItem(4)).toBeUndefined();
    });

    it(`can get all items`, () => {
      const todolist = new TodoListModel(["foo", 1 as any, "<script></script>"]);

      expect(todolist.getItems()).toEqual([
        { position: 0, text: "foo", valid: true },
        { position: 1, text: "", valid: false },
        { position: 2, text: "&lt;script&gt;&lt;/script&gt;", valid: true },
      ]);
    });

    it(`can set all items`, () => {
      const todolist = new TodoListModel();
      expect(todolist.getItems()).toHaveLength(0);

      todolist.setItems(["foo", 1 as any, "<script></script>"]);
      expect(todolist.getItems()).toEqual([
        { position: 0, text: "foo", valid: true },
        { position: 1, text: "", valid: false },
        { position: 2, text: "&lt;script&gt;&lt;/script&gt;", valid: true },
      ]);
    });

    it(`can clear all items`, () => {
      const todolist = new TodoListModel(["foo", 1 as any, "<script></script>"]);
      expect(todolist.getItems()).toEqual([
        { position: 0, text: "foo", valid: true },
        { position: 1, text: "", valid: false },
        { position: 2, text: "&lt;script&gt;&lt;/script&gt;", valid: true },
      ]);

      todolist.clearItems();
      expect(todolist.getItems()).toHaveLength(0);
    });
  });
});
