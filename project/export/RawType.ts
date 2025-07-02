import type {UnknownEntity} from "./UnknownEntity.ts"
import type {UnknownAPI} from "./UnknownAPI.ts"
import type {DistributiveOmit} from "#~src/DistributiveOmit.ts"

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
