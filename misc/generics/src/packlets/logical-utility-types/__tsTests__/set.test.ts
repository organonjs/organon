import { isTrue, isFalse } from "../logical";
import { IsEqual } from "../set";

isTrue<IsEqual<true, true>>();
isFalse<IsEqual<true, false>>();
isFalse<IsEqual<false, true>>();
isTrue<IsEqual<false, false>>();

isTrue<IsEqual<number, number>>();
isFalse<IsEqual<number, string>>();
isFalse<IsEqual<string, number>>();
isTrue<IsEqual<string, string>>();

isTrue<IsEqual<number & string, number & string>>();
isTrue<IsEqual<number & string, string & number>>();
isFalse<IsEqual<number, number & string>>();
isFalse<IsEqual<string, number & string>>();
isFalse<IsEqual<number & string, number>>();
isFalse<IsEqual<number & string, string>>();

isTrue<IsEqual<number & number, number>>();
isTrue<IsEqual<number | number, number>>();

interface IA {
  a: number;
  b: string;
}

isTrue<IsEqual<IA, IA>>();
isTrue<IsEqual<IA & IA, IA>>();
isTrue<IsEqual<IA | IA, IA>>();

interface IB {
  a: number;
}

interface IC {
  b: string;
}

isFalse<IsEqual<IA, IB>>();
isFalse<IsEqual<IA, IC>>();
isFalse<IsEqual<IB, IC>>();

isTrue<IsEqual<IA, IB & IC>>();
isFalse<IsEqual<IA, IB | IC>>();
