## @organon/emoji-presentation-map

A non exhaustive Map of a few utf8 characters to their emoji presentation sequences.

```js
import { emojiPresentationMap } from "@organon/emoji-presentation-map";

expect(emojiPresentationMap.get("✅")).toStrictEqual("\u2705"); // Character has an emoji presentation and an emoji presentation sequence
expect(emojiPresentationMap.get("🐛")).toStrictEqual("\ud83d\udc1b"); // Character has an emoji presentation but no emoji presentation sequence
expect(emojiPresentationMap.get("♻")).toStrictEqual("\u267b\ufe0f"); // Character has no emoji presentation but an emoji presentation sequence
expect(emojiPresentationMap.get("♻️")).toBeUndefined(); // This is not a character, but an actual emoji presentation sequence
```