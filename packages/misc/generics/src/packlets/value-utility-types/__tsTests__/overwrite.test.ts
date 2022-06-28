/* eslint-disable @typescript-eslint/naming-convention */
import { Overwrite } from "../overwrite";
import { isTrue, isFalse, IsEqual } from "../../logical-utility-types";

interface A {
  a: number;
  b: boolean;
  c: string;
  d: {
    e: string[];
    f?: number[];
  };
}

interface B {
  a: string;
  b: boolean;
  c: string;
  d: {
    e: number[];
    f?: number[];
  };
}

isFalse<IsEqual<A, B>>();

isTrue<IsEqual<A, Overwrite<B, A>>>();
isTrue<IsEqual<A, Overwrite<B, { a: number; d: A["d"] }>>>();
isTrue<IsEqual<A, Overwrite<B, { a: number; d: Overwrite<B["d"], { e: string[] }> }>>>();
