// emoji code points
// keys: presentation is default (may be text)
// values: presentation is emoji
export const emojiPresentationMap: Map<string, string> = new Map([
  ["👷", "\ud83d\udc77"],
  ["🔧", "\ud83d\udd27"],
  ["💚", "\ud83d\udc9a"],
  ["📝", "\ud83d\udcdd"],
  ["✨", "\u2728"],
  ["🐛", "\ud83d\udc1b"],
  ["⚡", "\u26A1"],
  ["♻", "\u267b\ufe0f"], // Force Emoji Presentation "♻️", see https://www.unicode.org/emoji/charts-13.1/text-style.html, row "2002 ⊖ Dings"
  ["⏪", "\u23ea"],
  ["🎨", "\ud83c\udfa8"],
  ["✅", "\u2705"],
]);
