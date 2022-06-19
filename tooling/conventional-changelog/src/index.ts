// @ts-ignore
import getPresetOptions from "conventional-changelog-conventionalcommits";
import conventionalChangelogCore from "conventional-changelog-core";
import { ParserOptions, WriterOptions, Options as RecommendedBumpOptions } from "conventional-changelog-core";

interface IPresetOptions {
  conventionalChangelog: typeof conventionalChangelogCore;
  parserOpts: ParserOptions;
  recommendedBumpOpts: RecommendedBumpOptions;
  writerOpts: WriterOptions;
}

// headerPattern is <commitType>(<commitScope>): <commitHeaderMessage>. The matching
// is kept loose for <commitType>, so there could be emojis anywhere.
// \ufe0f is the emoji presentation character switch, we do require it in the pattern
const headerPattern: RegExp = // eslint-disable-next-line no-misleading-character-class
  /^([ a-z0-9👷💚📝✨🐛⚡♻\ufe0f⏪🎨✅]*)(?:\(([a-z0-9]*)\))?!?: ([a-z0-9]*)$/u;

// This replaces the header pattern to be fed to the conventional changelog parser
// and allows for emojis in the header type
const exportFunc = async (parameter: (_: unknown, arg: IPresetOptions) => void): Promise<IPresetOptions> => {
  const loaded: IPresetOptions = await new Promise((resolve) => {
    // @ts-ignore
    getPresetOptions((any, arg: IPresetOptions) => {
      parameter(any, arg);
      resolve(arg);
    });
  });

  if (typeof loaded.parserOpts === "object") {
    loaded.parserOpts.headerPattern = headerPattern;
  }

  return loaded;
};

exportFunc.headerPattern = headerPattern;

export = exportFunc;
