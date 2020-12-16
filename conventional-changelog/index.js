const getPresetOptions = require("conventional-changelog-conventionalcommits");
const emojiPresentationMap = require("@organon/emojis");

const emojis = Array.from(emojiPresentationMap.values());

const headerPattern = new RegExp(
  `^([ \\w${emojis.join()}]*)(?:\\((.*)\\))?!?: (.*)$`,
  "u"
);

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
