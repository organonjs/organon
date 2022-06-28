// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Args = any[];

export type CatchError = (fn: (...args: Args) => Promise<void> | void) => (...args: Args) => void;
