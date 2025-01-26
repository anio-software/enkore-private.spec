import type {Kinds} from "#~src/Kinds.d.mts"
import type {EntitiesByKind} from "#~src/maps/EntitiesByKind.d.mts"

export type EntityOfKind<
	Kind extends Kinds
> = EntitiesByKind[Kind]
