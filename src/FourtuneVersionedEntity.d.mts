import type {EntityType} from "./EntityType.d.mts"
import type {Kinds} from "./Kinds.d.mts"

export type FourtuneVersionedEntity = EntityType<
	Kinds,
	number,
	number,
	unknown
>
