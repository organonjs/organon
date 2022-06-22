/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListModel } from "../list-model";

describe(`ListModel`, () => {
  describe(`used with valid data`, () => {
    it(`can add an item`, () => {
      const list = new ListModel(["foo", "bar", "qux"]);

      expect(list.addItem("quux")).toEqual({ position: 3, text: "quux", valid: true });
    });

    it(`can update an item`, () => {
      const list = new ListModel(["foo", "bar", "qux"]);

      expect(list.updateItem(1, "quux")).toEqual({ position: 1, text: "quux", valid: true });
    });

    it(`can remove an item`, () => {
      const list = new ListModel(["foo", "bar", "qux"]);

      expect(list.removeItem(1)).toBe(true);
      expect(list.removeItem(2)).toBe(false);
    });

    it(`can get an item`, () => {
      const list = new ListModel(["foo", "bar", "qux"]);

      expect(list.getItem(2)).toEqual({ position: 2, text: "qux", valid: true });
      expect(list.getItem(4)).toBeUndefined();
    });

    it(`can get all items`, () => {
      const list = new ListModel(["foo", "bar", "qux"]);

      expect(list.getItems()).toEqual(
        ["foo", "bar", "qux"].map((text, position) => ({ position, text, valid: true }))
      );
    });

    it(`can set all items`, () => {
      const list = new ListModel();
      expect(list.getItems()).toHaveLength(0);

      list.setItems(["foo", "bar", "qux"]);
      expect(list.getItems()).toEqual(
        ["foo", "bar", "qux"].map((text, position) => ({ position, text, valid: true }))
      );
    });

    it(`can clear all items`, () => {
      const list = new ListModel(["foo", "bar", "qux"]);
      expect(list.getItems()).toEqual(
        ["foo", "bar", "qux"].map((text, position) => ({ position, text, valid: true }))
      );

      list.clearItems();
      expect(list.getItems()).toHaveLength(0);
    });
  });

  describe(`used with malicious or invalid data`, () => {
    it(`can add an item`, () => {
      const list = new ListModel(["foo", "bar", "qux"]);

      expect(list.addItem(1 as any)).toEqual({ position: 3, text: "", valid: false });
      expect(list.addItem("<script></script>")).toEqual({
        position: 4,
        text: "&lt;script&gt;&lt;/script&gt;",
        valid: true,
      });
    });

    it(`can update an item`, () => {
      const list = new ListModel(["foo", "bar", "qux"]);

      expect(list.updateItem(1, 1 as any)).toEqual({ position: 1, text: "", valid: false });
      expect(list.updateItem(1, "<script></script>")).toEqual({
        position: 1,
        text: "&lt;script&gt;&lt;/script&gt;",
        valid: true,
      });
    });

    it(`can remove an item`, () => {
      const list = new ListModel(["foo", 1 as any, "<script></script>"]);

      expect(list.removeItem(1)).toBe(true);
      expect(list.removeItem(2)).toBe(false);
    });

    it(`can get an item`, () => {
      const list = new ListModel(["foo", 1 as any, "<script></script>"]);

      expect(list.getItem(2)).toEqual({
        position: 2,
        text: "&lt;script&gt;&lt;/script&gt;",
        valid: true,
      });
      expect(list.getItem(4)).toBeUndefined();
    });

    it(`can get all items`, () => {
      const list = new ListModel(["foo", 1 as any, "<script></script>"]);

      expect(list.getItems()).toEqual([
        { position: 0, text: "foo", valid: true },
        { position: 1, text: "", valid: false },
        { position: 2, text: "&lt;script&gt;&lt;/script&gt;", valid: true },
      ]);
    });

    it(`can set all items`, () => {
      const list = new ListModel();
      expect(list.getItems()).toHaveLength(0);

      list.setItems(["foo", 1 as any, "<script></script>"]);
      expect(list.getItems()).toEqual([
        { position: 0, text: "foo", valid: true },
        { position: 1, text: "", valid: false },
        { position: 2, text: "&lt;script&gt;&lt;/script&gt;", valid: true },
      ]);
    });

    it(`can clear all items`, () => {
      const list = new ListModel(["foo", 1 as any, "<script></script>"]);
      expect(list.getItems()).toEqual([
        { position: 0, text: "foo", valid: true },
        { position: 1, text: "", valid: false },
        { position: 2, text: "&lt;script&gt;&lt;/script&gt;", valid: true },
      ]);

      list.clearItems();
      expect(list.getItems()).toHaveLength(0);
    });
  });
});
