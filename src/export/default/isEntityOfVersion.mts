import type {Kinds} from "#~src/Kinds.d.mts"
import type {EntitiesByKind} from "#~src/maps/EntitiesByKind.d.mts"
import type {FourtuneVersionedEntity} from "#~src/FourtuneVersionedEntity.d.mts"

export function isEntityOfVersion(
	entity: FourtuneVersionedEntity,
	majorVersion: number
) : boolean {
	return entity._fourtuneEntityDescriptor.majorVersion === majorVersion
}
