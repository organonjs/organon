## @organon/commit-lint

This is a custom config for commitlint to be used consistently within the organon monorepo.
Mostly it picks rules in accordance with possible choices defined by commitlint (see index.ts).
But it does define types as an emoji + a common string such as "👷 build" or "✅ test".

The plugin must be used in tandem with the conventional-changelog-organon package (naming scheme is
hard-coded in conventional-changelog, so it is here).
The latter plugin enables conventional-changelog to enforce emojis in commit titles.