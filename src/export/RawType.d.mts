import type {UnknownEntity} from "./UnknownEntity.d.mts"
import type {UnknownAPI} from "./UnknownAPI.d.mts"

export type StripEntityProperties<T extends UnknownEntity> = Omit<
	T, keyof UnknownEntity
>

export type StripAPIProperties<T extends UnknownAPI> = Omit<
	T, keyof UnknownAPI
>

export type RawType<
	T extends (UnknownEntity | UnknownAPI)
> = T extends UnknownEntity ? StripEntityProperties<T>
	: T extends UnknownAPI ? StripAPIProperties<T>
		: never
