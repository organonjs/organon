import { RushConfiguration } from "@microsoft/rush-lib";
import {
  getCurrentConfig,
  importThisPackageNameAndPath,
  rushShouldPublishOnlyCwdPackage,
} from "../packlets/utils";
import { pipeline } from "stream/promises";
import { src, dest } from "gulp";

const config: RushConfiguration = getCurrentConfig();

const shouldPublishOnlyCwdPackage = async (): Promise<void> => {
  const info = await importThisPackageNameAndPath();
  const project = { ...info, shouldPublish: true };

  if (project.packageName === "") {
    return;
  }

  await pipeline(
    src(config.rushJsonFile),
    rushShouldPublishOnlyCwdPackage(project),
    dest(config.rushJsonFolder)
  );
};

shouldPublishOnlyCwdPackage().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
