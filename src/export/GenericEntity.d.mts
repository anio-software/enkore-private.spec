import type {DefineEntity} from "#~src/DefineEntity.d.mts"
import type {Kinds} from "#~src/Kinds.d.mts"

export type GenericEntity = DefineEntity<
	Kinds,
	number,
	number,
	unknown
>
