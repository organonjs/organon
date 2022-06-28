import { RushConfiguration } from "@microsoft/rush-lib";
import { getCurrentConfig, findPackageFolderByPackageNameHint } from "../packlets/utils";

const config: RushConfiguration = getCurrentConfig();

const searchHint: string = process.argv[2];

if (!searchHint) {
  process.exitCode = 1;
} else {
  findPackageFolderByPackageNameHint(searchHint, config).forEach((res) => {
    console.log(res.projectFolder);
  });
}
