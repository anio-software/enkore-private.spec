import type {Kinds} from "#~src/entities/Kinds.mts"
import type {AllDefinedEntities} from "#~src/AllDefinedEntities.mts"

export type EntitiesByKind = {
	[Kind in Kinds]: Extract<AllDefinedEntities, {
		entityKind: Kind
	}>
}
