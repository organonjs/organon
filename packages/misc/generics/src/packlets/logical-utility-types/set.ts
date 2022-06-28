import { Not } from "./logical";

export type IsEqual<A, B> = A extends B ? (B extends A ? true : false) : false;
export type IsUnequal<A, B> = Not<IsEqual<A, B>>;
