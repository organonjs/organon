const getPresetOptions = require("conventional-changelog-conventionalcommits");
const emojiMap = require("@organon/emojis");

const emojiCodes = Array.from(emojiMap.values());
const headerPattern = new RegExp(`^([ \\w${emojiCodes.join()}]*)(?:\\((.*)\\))?!?: (.*)$`, "u");

module.exports = async (parameter) => {
  const loaded = await new Promise((resolve) => {
    getPresetOptions((_, arg) => {
      parameter(_, arg);
      resolve(arg);
    })
  })

  if (typeof loaded.parserOpts === "object") {
    loaded.parserOpts.headerPattern = headerPattern;
  }

  return loaded;
}
