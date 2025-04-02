import type {UnknownEntity} from "./UnknownEntity.d.mts"
import type {UnknownAPI} from "./UnknownAPI.d.mts"

// credit to jcalz https://stackoverflow.com/a/67794430
type DistributiveOmit<T, K extends PropertyKey> = T extends any ? Omit<T, K> : never;

export type StripEntityProperties<T extends UnknownEntity> = DistributiveOmit<
	T, keyof UnknownEntity
>

export type StripAPIProperties<T extends UnknownAPI> = DistributiveOmit<
	T, keyof UnknownAPI
>

// this is slow and breaks if T is of type "UnknownAPI":
//
//export type RawType<
//	T extends (UnknownEntity | UnknownAPI)
//> = T extends UnknownEntity ? StripEntityProperties<T>
//	: T extends UnknownAPI ? StripAPIProperties<T>
//		: never
//

export type RawType<T> =
	T extends UnknownEntity ? StripEntityProperties<T>
		: T extends UnknownAPI ? StripAPIProperties<T>
			: T
