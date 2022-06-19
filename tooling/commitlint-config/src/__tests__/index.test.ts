import { emojiPresentationMap } from "@organon/emoji-presentation-map";
import { emojiRegexRGI } from "@organon/emoji-regex-rgi";
import config from "..";

describe("commitlint config", () => {
  const tuple = config.rules["type-enum"];

  it(`Rule "type-enum" uses a tuple`, () => {
    expect(tuple).toBeInstanceOf(Array);
  });

  if (Array.isArray(tuple)) {
    // Type guard makes typescript happy
    const types = tuple[2];

    it(`All emojis in types are found in the presentation map and vice versa`, () => {
      expect(types.length).toBe(emojiPresentationMap.size);

      let counter = 0;

      types.forEach((type: string): void => {
        const emojiCodePoint = type.codePointAt(0);

        expect(emojiCodePoint).not.toBeUndefined();

        if (emojiCodePoint !== undefined) {
          // Type guard makes typescript happy
          const char = String.fromCodePoint(emojiCodePoint);
          const presentation = emojiPresentationMap.get(char);

          if (presentation !== undefined) {
            counter++;
          }
        }
      });

      expect(counter).toBe(emojiPresentationMap.size);
    });

    types.forEach((type: string): void => {
      it(`type "${type}" contains an emoji`, () => {
        expect(emojiRegexRGI().test(type)).toBe(true);
      });

      it(`type "${type}" starts with an emoji`, () => {
        const emojiCodePoint = type.codePointAt(0);

        if (emojiCodePoint !== undefined) {
          // Type guard makes typescript happy
          const char = String.fromCodePoint(emojiCodePoint);
          const presentation = emojiPresentationMap.get(char) || "";

          if (char.length === 2) {
            expect(emojiRegexRGI().test(char)).toBe(true);
          } else {
            expect(presentation).not.toBe("");
          }
        }
      });
    });
  }
});
