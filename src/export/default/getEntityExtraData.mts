import type {FourtuneVersionedEntity} from "#~src/FourtuneVersionedEntity.d.mts"

export function getEntityExtraData(
	entity: FourtuneVersionedEntity,
	key: string
) : any {
	return entity._fourtuneEntityDescriptor.extraData[key]
}
