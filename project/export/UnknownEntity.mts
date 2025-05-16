import type {DefineEntity} from "#~src/DefineEntity.mts"
import type {Kinds} from "#~src/entities/Kinds.mts"

export type UnknownEntity = DefineEntity<
	Kinds,
	number,
	number,
	unknown
>
