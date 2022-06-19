import config from "@organon/commitlint-config";
import { headerPattern } from "..";

describe("commitlint config", () => {
  const tuple = config.rules["type-enum"];

  if (Array.isArray(tuple)) {
    // Type guard makes typescript happy
    const types = tuple[2];

    types.forEach((type: string): void => {
      it(`header "${type}(scope): description" is valid`, () => {
        const commitHeader = type + "(scope): description";

        expect(headerPattern.test(commitHeader)).toBe(true);
      });

      it(`header "${type}(scope)!: description" is valid`, () => {
        const commitHeader = type + "(scope)!: description";

        expect(headerPattern.test(commitHeader)).toBe(true);
      });

      it(`header "${type}(Scope): description" is invalid`, () => {
        const commitHeader = type + "(Scope): description";

        expect(headerPattern.test(commitHeader)).toBe(false);
      });

      it(`header "${type}(scope): Description" is invalid`, () => {
        const commitHeader = type + "(scope): Description";

        expect(headerPattern.test(commitHeader)).toBe(false);
      });
    });
  }
});
