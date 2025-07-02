import type {DefineEntity} from "#~src/DefineEntity.ts"
import type {Kinds} from "#~src/entities/Kinds.ts"

export type UnknownEntity = DefineEntity<
	Kinds,
	number,
	number,
	unknown
>
