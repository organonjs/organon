/* eslint-disable @typescript-eslint/no-explicit-any */
import { IInputListItemModel } from "../list-api";
import { ListModel } from "../list-model";

const initkeys = (texts: readonly string[]): readonly IInputListItemModel[] =>
  texts.map((text, index) => ({ text, key: "" + index }));

describe(`ListModel`, () => {
  describe(`used with valid data`, () => {
    it(`can add an item`, () => {
      const list = new ListModel(initkeys(["foo", "bar", "qux"]));

      expect(list.addItem({ text: "quux", key: "3" })).toEqual({
        position: 3,
        text: "quux",
        valid: true,
        key: "3",
      });
    });

    it(`can update an item`, () => {
      const list = new ListModel(initkeys(["foo", "bar", "qux"]));

      expect(list.updateItem(1, "quux")).toEqual({ position: 1, text: "quux", valid: true, key: "1" });
    });

    it(`can remove an item`, () => {
      const list = new ListModel(initkeys(["foo", "bar", "qux"]));

      expect(list.removeItem(1)).toBe(true);
      expect(list.removeItem(2)).toBe(false);
    });

    it(`can get an item`, () => {
      const list = new ListModel(initkeys(["foo", "bar", "qux"]));

      expect(list.getItem(2)).toEqual({ position: 2, text: "qux", valid: true, key: "2" });
      expect(list.getItem(4)).toBeUndefined();
    });

    it(`can move an item`, () => {
      const list = new ListModel(initkeys(["foo", "bar", "qux"]));

      expect(list.moveItem(2, 0)).toEqual({ position: 0, text: "qux", valid: true, key: "2" });
      expect(list.getItems()).toEqual([
        { position: 0, text: "qux", valid: true, key: "2" },
        { position: 1, text: "foo", valid: true, key: "0" },
        { position: 2, text: "bar", valid: true, key: "1" },
      ]);

      expect(list.moveItem(1, 2)).toEqual({ position: 2, text: "foo", valid: true, key: "0" });
      expect(list.getItems()).toEqual([
        { position: 0, text: "qux", valid: true, key: "2" },
        { position: 1, text: "bar", valid: true, key: "1" },
        { position: 2, text: "foo", valid: true, key: "0" },
      ]);

      expect(list.moveItem(1, 4)).toBeUndefined();
      expect(list.getItems()).toEqual([
        { position: 0, text: "qux", valid: true, key: "2" },
        { position: 1, text: "bar", valid: true, key: "1" },
        { position: 2, text: "foo", valid: true, key: "0" },
      ]);

      expect(list.moveItem(7, 1)).toBeUndefined();
      expect(list.getItems()).toEqual([
        { position: 0, text: "qux", valid: true, key: "2" },
        { position: 1, text: "bar", valid: true, key: "1" },
        { position: 2, text: "foo", valid: true, key: "0" },
      ]);
    });

    it(`can get all items`, () => {
      const list = new ListModel(initkeys(["foo", "bar", "qux"]));

      expect(list.getItems()).toEqual(
        ["foo", "bar", "qux"].map((text, position) => ({ position, text, valid: true, key: "" + position }))
      );
    });

    it(`can set all items`, () => {
      const list = new ListModel();
      expect(list.getItems()).toHaveLength(0);

      list.setItems(initkeys(["foo", "bar", "qux"]));
      expect(list.getItems()).toEqual(
        ["foo", "bar", "qux"].map((text, position) => ({ position, text, valid: true, key: "" + position }))
      );
    });

    it(`can clear all items`, () => {
      const list = new ListModel(initkeys(["foo", "bar", "qux"]));
      expect(list.getItems()).toEqual(
        ["foo", "bar", "qux"].map((text, position) => ({ position, text, valid: true, key: "" + position }))
      );

      list.clearItems();
      expect(list.getItems()).toHaveLength(0);
    });
  });

  describe(`used with malicious or invalid data`, () => {
    it(`can add an item`, () => {
      const list = new ListModel(initkeys(["foo", "bar", "qux"]));

      expect(list.addItem({ text: 1 as any, key: "3" })).toEqual({
        position: 3,
        text: "",
        valid: false,
        key: "3",
      });
      expect(list.addItem({ text: "<script></script>", key: "4" })).toEqual({
        position: 4,
        text: "&lt;script&gt;&lt;/script&gt;",
        valid: true,
        key: "4",
      });
    });

    it(`can update an item`, () => {
      const list = new ListModel(initkeys(["foo", "bar", "qux"]));

      expect(list.updateItem(1, 1 as any)).toEqual({ position: 1, text: "", valid: false, key: "1" });
      expect(list.updateItem(1, "<script></script>")).toEqual({
        position: 1,
        text: "&lt;script&gt;&lt;/script&gt;",
        valid: true,
        key: "1",
      });
    });

    it(`can remove an item`, () => {
      const list = new ListModel(initkeys(["foo", 1 as any, "<script></script>"]));

      expect(list.removeItem(1)).toBe(true);
      expect(list.removeItem(2)).toBe(false);
    });

    it(`can get an item`, () => {
      const list = new ListModel(initkeys(["foo", 1 as any, "<script></script>"]));

      expect(list.getItem(2)).toEqual({
        position: 2,
        text: "&lt;script&gt;&lt;/script&gt;",
        valid: true,
        key: "2",
      });
      expect(list.getItem(4)).toBeUndefined();
    });

    it(`can move an item`, () => {
      const list = new ListModel(initkeys(["foo", 1 as any, "<script></script>"]));

      expect(list.moveItem(2, 0)).toEqual({
        position: 0,
        text: "&lt;script&gt;&lt;/script&gt;",
        valid: true,
        key: "2",
      });
      expect(list.getItems()).toEqual([
        {
          position: 0,
          text: "&lt;script&gt;&lt;/script&gt;",
          valid: true,
          key: "2",
        },
        {
          position: 1,
          text: "foo",
          valid: true,
          key: "0",
        },
        {
          position: 2,
          text: "",
          valid: false,
          key: "1",
        },
      ]);

      expect(list.moveItem(1, 2)).toEqual({ position: 2, text: "foo", valid: true, key: "0" });
      expect(list.getItems()).toEqual([
        {
          position: 0,
          text: "&lt;script&gt;&lt;/script&gt;",
          valid: true,
          key: "2",
        },
        {
          position: 1,
          text: "",
          valid: false,
          key: "1",
        },
        {
          position: 2,
          text: "foo",
          valid: true,
          key: "0",
        },
      ]);

      expect(list.moveItem(1, 4)).toBeUndefined();
      expect(list.getItems()).toEqual([
        {
          position: 0,
          text: "&lt;script&gt;&lt;/script&gt;",
          valid: true,
          key: "2",
        },
        {
          position: 1,
          text: "",
          valid: false,
          key: "1",
        },
        {
          position: 2,
          text: "foo",
          valid: true,
          key: "0",
        },
      ]);

      expect(list.moveItem(7, 1)).toBeUndefined();
      expect(list.getItems()).toEqual([
        {
          position: 0,
          text: "&lt;script&gt;&lt;/script&gt;",
          valid: true,
          key: "2",
        },
        {
          position: 1,
          text: "",
          valid: false,
          key: "1",
        },
        {
          position: 2,
          text: "foo",
          valid: true,
          key: "0",
        },
      ]);
    });

    it(`can get all items`, () => {
      const list = new ListModel(initkeys(["foo", 1 as any, "<script></script>"]));

      expect(list.getItems()).toEqual([
        { position: 0, text: "foo", valid: true, key: "0" },
        { position: 1, text: "", valid: false, key: "1" },
        { position: 2, text: "&lt;script&gt;&lt;/script&gt;", valid: true, key: "2" },
      ]);
    });

    it(`can set all items`, () => {
      const list = new ListModel();
      expect(list.getItems()).toHaveLength(0);

      list.setItems(initkeys(["foo", 1 as any, "<script></script>"]));
      expect(list.getItems()).toEqual([
        { position: 0, text: "foo", valid: true, key: "0" },
        { position: 1, text: "", valid: false, key: "1" },
        { position: 2, text: "&lt;script&gt;&lt;/script&gt;", valid: true, key: "2" },
      ]);
    });

    it(`can clear all items`, () => {
      const list = new ListModel(initkeys(["foo", 1 as any, "<script></script>"]));
      expect(list.getItems()).toEqual([
        { position: 0, text: "foo", valid: true, key: "0" },
        { position: 1, text: "", valid: false, key: "1" },
        { position: 2, text: "&lt;script&gt;&lt;/script&gt;", valid: true, key: "2" },
      ]);

      list.clearItems();
      expect(list.getItems()).toHaveLength(0);
    });
  });
});
