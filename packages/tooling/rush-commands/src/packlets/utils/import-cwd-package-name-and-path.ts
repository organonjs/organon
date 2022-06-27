import { join } from "path";

interface IPackageNameAndPath {
  packageName: string;
  projectFolder: string;
}

export const importThisPackageNameAndPath = async (): Promise<IPackageNameAndPath> => {
  let packageJson: { name: "string" };
  const cwd = process.cwd();

  try {
    packageJson = await import(join(cwd, "package.json"));
  } catch (e) {
    console.error("Failed to load/parse package.json, searched in folder ", cwd);
    process.exitCode = 1;
    return { packageName: "", projectFolder: "" };
  }

  return { packageName: packageJson.name, projectFolder: cwd };
};
