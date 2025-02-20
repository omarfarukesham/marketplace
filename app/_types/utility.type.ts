export type NestedProps<T> = T extends object
  ? { [K in keyof T]: `${Exclude<K, symbol>}${'' | `.${NestedProps<T[K]>}`}` }[keyof T]
  : never;

export type GetNestedType<T, K extends string> = K extends keyof T
  ? T[K]
  : K extends `${infer First}.${infer Rest}`
  ? First extends keyof T
    ? GetNestedType<T[First], Rest>
    : never
  : never;

export type SearchParamsType = { [key: string]: string | string[] | undefined };
