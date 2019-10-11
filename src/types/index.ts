/* eslint max-len: off */
/** @see {@link https://www.typescriptlang.org/docs/handbook/advanced-types.html} */
export type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;
