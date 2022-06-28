# Change Log - @organon/rush-commands

This log was last generated on Mon, 27 Jun 2022 23:42:18 GMT and should not be manually modified.

## 0.1.0
Mon, 27 Jun 2022 23:42:18 GMT

### Minor changes

- ✨ feat(tooling): new package rush-commands

Just command rush-find for the moment.

- ✨ feat(rush-commands): publish tweak cmds

At this stage the repo is mostly minimal code calling each other.
Publishing all doesn't make sense, but a bug in the deps of cmd
changefiles requires shouldPublish to be true in order for change files
to be automatically generated on commit.

On the other hand, commands are helpers to be used asap, but in a
stable version, so they must be installed, so they must be published.

After publication, there will be potentially 2 more commands:
rush shouldPublishAllPackages and rush shouldPublishOnlyCwdPackage
that edit on the fly the root rush.json config file.


