import { emojiPresentationMap } from "..";
import { emojiRegexRGI } from "@organon/emoji-regex-rgi";

describe("Emoji presentation map", () => {
  for (const [emoji, presentation] of emojiPresentationMap) {
    it(`${presentation} is a proper emoji presentation"`, () => {
      expect(emojiRegexRGI().test(presentation)).toBe(true);
    });

    // If emoji is not a proper emoji presentation, like ♻ instead of ♻️
    if (!emojiRegexRGI().test(emoji)) {
      it(`${emoji} !== ${presentation}`, () => {
        expect(emoji).not.toStrictEqual(presentation);
      });

      it(`${presentation} requires extra care when matching with a regex`, () => {
        // eslint-disable-next-line @rushstack/security/no-unsafe-regexp
        const regex1 = new RegExp(`^[${presentation}]$`, "u");
        // eslint-disable-next-line @rushstack/security/no-unsafe-regexp
        const regex2 = new RegExp(`[${presentation}]`, "u");
        expect(regex1.test(presentation)).toBe(false);
        expect(regex2.test(presentation)).toBe(true);
      });
    } else {
      it(`${emoji} === ${presentation}`, () => {
        expect(emoji).toStrictEqual(presentation);
      });
    }

    it(`${emoji} may be used safely in a regex with flag "u"`, () => {
      // eslint-disable-next-line @rushstack/security/no-unsafe-regexp
      const regex1 = new RegExp(`^[${emoji}]$`, "u");
      // eslint-disable-next-line @rushstack/security/no-unsafe-regexp
      const regex2 = new RegExp(`[${emoji}]`, "u");
      expect(regex1.test(emoji)).toBe(true);
      expect(regex2.test(emoji)).toBe(true);
    });
  }
});
