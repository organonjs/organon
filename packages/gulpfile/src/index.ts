import gulp from "gulp";
import { spawn } from "child_process";

const buildLib = () => spawn("npx", ["tsc"]);
const buildCjs = () => spawn("npx", ["tsc", "--project", "tsconfig-cjs.json"]);

const prepublish = gulp.parallel(buildLib, buildCjs);

gulp.task("default", prepublish);
