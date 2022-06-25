/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { OmittableKeys, RequiredKeys, HasKeys, DistinctKeys } from "../keys";
import { isTrue, isFalse, IsEqual } from "../../logical-utility-types";

type Foo = {
  bar: number;
  qux: string;
  bubu: string;
};

type Bar = {
  bar: number;
  qux?: string;
  bubu: string;
};

type Qux = {
  bar?: number;
  qux?: string;
  bubu: string;
};

// OmittableKeys
isFalse<IsEqual<OmittableKeys<Foo, "bar">, Foo>>();
isFalse<IsEqual<OmittableKeys<Foo, "qux">, Foo>>();
isFalse<IsEqual<OmittableKeys<Foo, "bubu">, Foo>>();

isFalse<IsEqual<OmittableKeys<Foo, "bar">, Bar>>();
isTrue<IsEqual<OmittableKeys<Foo, "qux">, Bar>>();
isFalse<IsEqual<OmittableKeys<Foo, "bubu">, Bar>>();
isFalse<IsEqual<OmittableKeys<Foo, "bar" | "qux">, Bar>>();

isFalse<IsEqual<OmittableKeys<Foo, "bar">, Qux>>();
isFalse<IsEqual<OmittableKeys<Foo, "qux">, Qux>>();
isFalse<IsEqual<OmittableKeys<Foo, "bubu">, Qux>>();
isTrue<IsEqual<OmittableKeys<Foo, "bar" | "qux">, Qux>>();

// RequiredKeys
isTrue<IsEqual<RequiredKeys<Foo, "bar">, Foo>>();
isTrue<IsEqual<RequiredKeys<Foo, "qux">, Foo>>();
isTrue<IsEqual<RequiredKeys<Foo, "bubu">, Foo>>();

isFalse<IsEqual<RequiredKeys<Foo, "bar">, Bar>>();
isFalse<IsEqual<RequiredKeys<Foo, "qux">, Bar>>();
isFalse<IsEqual<RequiredKeys<Foo, "bubu">, Bar>>();

isFalse<IsEqual<RequiredKeys<Bar, "bar">, Foo>>();
isTrue<IsEqual<RequiredKeys<Bar, "qux">, Foo>>();
isFalse<IsEqual<RequiredKeys<Bar, "bubu">, Foo>>();

isFalse<IsEqual<RequiredKeys<Qux, "bar">, Foo>>();
isTrue<IsEqual<RequiredKeys<Qux, "bar">, Bar>>();
isFalse<IsEqual<RequiredKeys<Qux, "qux">, Foo>>();
isFalse<IsEqual<RequiredKeys<Qux, "bubu">, Foo>>();
isTrue<IsEqual<RequiredKeys<Qux, "bar" | "qux">, Foo>>();

// HasKeys
isTrue<HasKeys<Foo, "bar">>();
isTrue<HasKeys<Foo, "qux">>();
isTrue<HasKeys<Foo, "bubu">>();
isTrue<HasKeys<Foo, "bar" | "bubu">>();
isFalse<HasKeys<Foo, "yip">>();
isFalse<HasKeys<Foo, "yip" | "bubu">>();

isTrue<HasKeys<Bar, "bar">>();
isTrue<HasKeys<Bar, "qux">>();
isTrue<HasKeys<Bar, "bubu">>();
isTrue<HasKeys<Bar, "bar" | "bubu">>();
isFalse<HasKeys<Bar, "yip">>();
isFalse<HasKeys<Bar, "yip" | "bubu">>();

isTrue<HasKeys<Qux, "bar">>();
isTrue<HasKeys<Qux, "qux">>();
isTrue<HasKeys<Qux, "bubu">>();
isTrue<HasKeys<Qux, "bar" | "bubu">>();
isFalse<HasKeys<Qux, "yip">>();
isFalse<HasKeys<Qux, "yip" | "bubu">>();

// DistinctKeys
isFalse<DistinctKeys<Foo, Foo>>();
isFalse<DistinctKeys<Foo, Bar>>();
isFalse<DistinctKeys<Foo, Qux>>();
isFalse<DistinctKeys<Qux, Bar>>();

type Quux = {
  a: number;
  b: string;
};

type Bobo = {
  a: string;
};

isTrue<DistinctKeys<Foo, Quux>>();
isFalse<DistinctKeys<Bobo, Quux>>();
isTrue<DistinctKeys<Bobo, Pick<Quux, "b">>>();
