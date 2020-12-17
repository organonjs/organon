const emojiPresentationMap = require("..");
const { emojiRegexRGI } = require("@organon/emoji-regex-rgi");

describe("Emoji presentation map", () => {
  for (const [emoji, presentation] of emojiPresentationMap) {
    it(`${presentation} is a proper emoji presentation"`, () => {
      expect(emojiRegexRGI().test(presentation)).toBe(true);
    });

    if (emoji === "♻") {
      it(`${emoji} !== ${presentation}`, () => {
        expect(emoji).not.toStrictEqual(presentation);
      });

      it(`${presentation} requires extra care when matching with a regex`, () => {
        const regex1 = new RegExp(`^[${presentation}]$`, "u");
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
      const regex = new RegExp(`^[${emoji}]$`, "u");
      expect(regex.test(emoji)).toBe(true);
    });
  }
});
