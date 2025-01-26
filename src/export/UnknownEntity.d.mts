import type {DefineEntity} from "#~src/DefineEntity.d.mts"
import type {Kinds} from "#~src/Kinds.d.mts"

export type UnknownEntity = DefineEntity<
	Kinds,
	number,
	number,
	unknown
>
