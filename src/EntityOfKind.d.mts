import type {Kinds} from "./Kinds.d.mts"
import type {EntityType} from "./EntityType.d.mts"
import type {EntitiesByKind} from "#~src/maps/EntitiesByKind.d.mts"

//
// Use isConcrete true if you already know in advance
// what version the user will provide
//
export type EntityOfKind<
	IsConcrete extends boolean,
	Kind extends Kinds
> = IsConcrete extends true ? EntitiesByKind[Kind] : EntityType<
	Kind,
	number,
	number,
	unknown
>
