import type {FourtuneVersionedEntity} from "#~src/FourtuneVersionedEntity.d.mts"
import type {Kinds} from "#~src/Kinds.d.mts"

type ProducedByPackage = FourtuneVersionedEntity["_fourtuneEntityDescriptor"]["producedBy"]

type EntityMetaData = {
	kind: Kinds,
	majorVersion: number,
	revision: number,
	createdByPackage: ProducedByPackage|null
}

export function getEntityMetaData(
	entity: FourtuneVersionedEntity
) : EntityMetaData {
	const {_fourtuneEntityDescriptor} = entity

	return {
		kind: _fourtuneEntityDescriptor.kind,
		majorVersion: _fourtuneEntityDescriptor.majorVersion,
		revision: _fourtuneEntityDescriptor.revision,
		createdByPackage: _fourtuneEntityDescriptor.producedBy
	}
}
