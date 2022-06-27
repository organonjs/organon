import { RushConfiguration, RushConfigurationProject } from "@microsoft/rush-lib";

export interface ISearchResult {
  scope: string;
  name: string;
  packageName: string;
  projectFolder: string;
}

export const findPackageFolderByPackageNameHint: (
  searchHint: string,
  config: RushConfiguration
) => ISearchResult[] = (searchHint: string, config: RushConfiguration) => {
  const projects: RushConfigurationProject[] = config.projects;

  return projects.reduce(
    (results: ISearchResult[], { packageName, projectFolder }: RushConfigurationProject): ISearchResult[] => {
      const scopePattern: RegExp = /^(?:@([^/]+?)[/])?([^/]+?)$/;
      let scope: string = "";
      let name: string = packageName;

      if (encodeURIComponent(packageName) !== packageName) {
        const match = name.match(scopePattern);

        if (match) {
          scope = match[1];
          name = match[2];

          if (encodeURIComponent(scope) !== scope || encodeURIComponent(name) !== name) {
            console.warn("Found an invalid", packageName, "in folder", projectFolder);
          }
        }
      }

      if (packageName.includes(searchHint)) {
        results.push({
          scope,
          name,
          packageName,
          projectFolder,
        });
      }

      return results;
    },
    []
  );
};
