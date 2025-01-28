import type {Kinds} from "#~src/entities/Kinds.d.mts"
import type {AllDefinedEntities} from "#~synthetic/user/AllDefinedEntities.d.mts"

export type EntitiesByKind = {
	[Kind in Kinds]: Extract<AllDefinedEntities, {
		entityKind: Kind
	}>
}
