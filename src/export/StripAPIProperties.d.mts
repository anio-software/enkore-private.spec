import type {UnknownAPI} from "./UnknownAPI.d.mts"

export type StripAPIProperties<T extends UnknownAPI> = Omit<
	T, keyof UnknownAPI
>
