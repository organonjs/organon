// @ts-ignore
import getPresetOptions from "conventional-changelog-conventionalcommits";
import conventionalChangelogCore from "conventional-changelog-core";
import { ParserOptions, WriterOptions, Options as RecommendedBumpOptions } from "conventional-changelog-core";
import { emojiPresentationMap } from "@organon/emoji-presentation-map";

interface IPresetOptions {
  conventionalChangelog: typeof conventionalChangelogCore;
  parserOpts: ParserOptions;
  recommendedBumpOpts: RecommendedBumpOptions;
  writerOpts: WriterOptions;
}

const emojis: Array<string> = Array.from(emojiPresentationMap.values());

// Pattern is <commitType>(<commitScope>): <commitHeaderMessage>. The matching
// is kept loose for <commitType>, so there could be emojis anywhere.
const headerPattern: RegExp = new RegExp(`^([ \\w${emojis.join()}]*)(?:\\((.*)\\))?!?: (.*)$`, "u");

// This replaces the header pattern to be fed to the conventional changelog parser
// and allows for emojis in the header type
export default async (parameter: (_: unknown, arg: IPresetOptions) => void): Promise<IPresetOptions> => {
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
