const getPresetOptions = require("conventional-changelog-conventionalcommits");
const { emojiPresentationMap } = require("@organon/emojis");

const emojis = Array.from(emojiPresentationMap.values());

// Pattern is <commitType>(<commitScope>): <commitHeaderMessage>. The matching
// is kept loose for <commitType>, so there could be emojis anywhere.
const headerPattern = new RegExp(
  `^([ \\w${emojis.join()}]*)(?:\\((.*)\\))?!?: (.*)$`,
  "u"
);

// This replaces the header pattern to be fed to the conventional changelog parser
// and allows for emojis in the header type
module.exports = async (parameter) => {
  const loaded = await new Promise((resolve) => {
    getPresetOptions((_, arg) => {
      parameter(_, arg);
      resolve(arg);
    });
  });

  if (typeof loaded.parserOpts === "object") {
    loaded.parserOpts.headerPattern = headerPattern;
  }

  return loaded;
};
