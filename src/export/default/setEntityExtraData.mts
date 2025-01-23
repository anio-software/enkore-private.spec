import type {FourtuneVersionedEntity} from "#~src/FourtuneVersionedEntity.d.mts"

export function setEntityExtraData(
	entity: FourtuneVersionedEntity,
	key: string,
	value: any
) : any {
	let oldValue = entity._fourtuneEntityDescriptor.extraData[key]

	entity._fourtuneEntityDescriptor.extraData[key] = value

	return oldValue
}
