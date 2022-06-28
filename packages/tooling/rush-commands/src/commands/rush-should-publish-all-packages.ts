import { RushConfiguration } from "@microsoft/rush-lib";
import {
  getCurrentConfig,
  importThisPackageNameAndPath,
  rushShouldPublishAllPackages,
} from "../packlets/utils";
import { pipeline } from "stream/promises";
import { src, dest } from "gulp";

const config: RushConfiguration = getCurrentConfig();

const shouldPublishAllPackages = async (): Promise<void> => {
  const info = await importThisPackageNameAndPath();
  const project = { ...info, shouldPublish: true };

  if (project.packageName === "") {
    return;
  }

  await pipeline(
    src(config.rushJsonFile),
    rushShouldPublishAllPackages(project),
    dest(config.rushJsonFolder)
  );
};

shouldPublishAllPackages().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
