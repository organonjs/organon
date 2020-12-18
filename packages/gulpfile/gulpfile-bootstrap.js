const gulp = require("gulp");
const { spawn } = require("child_process");

// If the cjs dir has been deleted, regenerate it for gulp to work properly
// with command: gulp --gulpfile gulpfile-bootstrap.js
// (or equivalently: npx tsc --project tsconfig-cjs.json)
gulp.task("default", () =>
  spawn("npx", ["tsc", "--project", "tsconfig-cjs.json"])
);
