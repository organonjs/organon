"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = __importDefault(require("gulp"));
const child_process_1 = require("child_process");
const buildLib = () => child_process_1.spawn("npx", ["tsc"]);
const buildCjs = () => child_process_1.spawn("npx", ["tsc", "--project", "tsconfig-cjs.json"]);
const prepublish = gulp_1.default.parallel(buildLib, buildCjs);
gulp_1.default.task("default", prepublish);
