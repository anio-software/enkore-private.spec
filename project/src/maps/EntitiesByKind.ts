import type {Kinds} from "#~src/entities/Kinds.ts"
import type {AllDefinedEntities} from "#~src/AllDefinedEntities.ts"

export type EntitiesByKind = {
	[Kind in Kinds]: Extract<AllDefinedEntities, {
		entityKind: Kind
	}>
}
