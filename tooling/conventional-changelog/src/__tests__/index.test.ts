import config from "@organon/commitlint-config";
import { emojiPresentationMap } from "@organon/emoji-presentation-map";
import { headerPattern } from "..";

describe("commitlint config", () => {
  const tuple = config.rules["type-enum"];

  // Make sure something bad happens if no tests are set
  expect(tuple).toBeInstanceOf(Array);

  if (Array.isArray(tuple)) {
    // Type guard makes typescript happy
    const types = tuple[2];

    types.forEach((type: string): void => {
      it(`header "${type}(scope): description" is valid`, () => {
        const commitHeader = type + "(scope): description";

        expect(headerPattern.test(commitHeader)).toBe(true);
      });

      it(`header "${type}(scope)!: description" is valid`, () => {
        const commitHeader = type + "(scope)!: description";

        expect(headerPattern.test(commitHeader)).toBe(true);
      });

      it(`header "${type}(Scope): description" is invalid`, () => {
        const commitHeader = type + "(Scope): description";

        expect(headerPattern.test(commitHeader)).toBe(false);
      });

      it(`header "${type}(scope): Description" is invalid`, () => {
        const commitHeader = type + "(scope): Description";

        expect(headerPattern.test(commitHeader)).toBe(false);
      });
    });

    it(`header pattern exactly checks for all emojis in the emoji presentation map`, () => {
      const emojis = Array.from(emojiPresentationMap.values()).join("");

      let truncatedSource: string = headerPattern.source.substring(10);
      truncatedSource = truncatedSource.substring(0, truncatedSource.indexOf("]"));
      truncatedSource = truncatedSource.replace(/.\\ufe0f/g, (match: string): string => {
        return emojiPresentationMap.get(match[0]) || "";
      });

      expect(emojis).toBe(truncatedSource);
    });
  }
});
