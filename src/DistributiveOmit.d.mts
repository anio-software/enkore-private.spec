// credit to jcalz https://stackoverflow.com/a/67794430
export type DistributiveOmit<T, K extends PropertyKey> = T extends any ? Omit<T, K> : never
