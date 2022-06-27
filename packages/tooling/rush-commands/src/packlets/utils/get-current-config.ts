import { RushConfiguration } from "@microsoft/rush-lib";

export const getCurrentConfig: () => RushConfiguration = () => {
  return RushConfiguration.loadFromDefaultLocation({
    startingFolder: process.cwd(),
  });
};
