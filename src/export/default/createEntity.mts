import type {Kinds} from "#~src/Kinds.d.mts"
import type {AllPossibleMajorVersions} from "#~src/AllPossibleMajorVersions.d.mts"
import type {AllPossibleRevisions} from "#~src/AllPossibleRevisions.d.mts"
import type {Entities} from "#~src/maps/Entities.d.mts"
import type {FourtuneVersionedEntity} from "#~src/FourtuneVersionedEntity.d.mts"

type ProducedByPackage = FourtuneVersionedEntity["_fourtuneEntityDescriptor"]["producedBy"]

export function createEntity<
	Kind extends Kinds,
	MajorVersion extends AllPossibleMajorVersions,
	Revision extends AllPossibleRevisions
>(
	kind: Kind,
	majorVersion: MajorVersion,
	revision: Revision,
	entityData: Omit<Entities[Kind][MajorVersion][Revision], "_fourtuneEntityDescriptor">,
	createdByPackage?: ProducedByPackage|null|undefined
) : FourtuneVersionedEntity {
	let producedBy : ProducedByPackage|null = null
	let extraData = {}

	if (createdByPackage) {
		producedBy = createdByPackage
	}

	let partial = {
		_fourtuneEntityDescriptor: {
			kind,
			majorVersion,
			revision,
			object: {},
			extraData,
			producedBy
		},

		...entityData
	}

	// this property should refer to itself
	partial._fourtuneEntityDescriptor.object = partial

	return partial
}
