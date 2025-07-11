// source https://davidgomes.com/pick-omit-over-union-types-in-typescript/
export type DistributivePick<T, K extends keyof T> = T extends unknown ? Pick<T, K> : never
