const getPresetOptions = require("conventional-changelog-conventionalcommits");

module.exports = async (parameter) => {
  const loaded = await new Promise((resolve) => {
    getPresetOptions((_, arg) => {
      parameter(_, arg);
      resolve(arg);
    })
  })

  if (typeof loaded.parserOpts === "object") {
    loaded.parserOpts.headerPattern = /^([ \w👷💚📝✨🐛⚡️♻️⏪✅🎨]*)(?:\((.*)\))?!?: (.*)$/u;
  }
  return loaded;
}
