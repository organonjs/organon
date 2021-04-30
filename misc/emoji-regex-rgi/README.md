## @organon/emoji-regex-rgi

RGI means "Recommended for General Interchange". RGI emojis are likely to be
supported by all popular platforms.

```js
import { emojiRegexRGI } from "@organon/emoji-regex-rgi";

expect(emojiRegexRGI().test("👷")).toBe(true);

expect(emojiRegexRGI().test("♻️")).toBe(true);
expect(emojiRegexRGI().test("♻")).toBe(false);
```

Regexp extracted from https://github.com/mathiasbynens/emoji-regex/blob/master/RGI_Emoji.js v9.2.0
© 2020 Mathias Bynens, MIT License
