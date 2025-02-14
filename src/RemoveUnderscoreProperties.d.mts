type IsArray<T> = T extends unknown[] ? true : false
type IsObject<T> = IsArray<T> extends false ? T extends object ? true : false : false

export type RemoveUnderscoreProperties<T> = IsObject<T> extends true ? {[K in keyof Omit<T, `_${string}`>]: RemoveUnderscoreProperties<T[K]> } : T
