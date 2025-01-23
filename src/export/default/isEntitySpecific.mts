import type {Kinds} from "#~src/Kinds.d.mts"
import type {Entities} from "#~src/maps/Entities.d.mts"
import type {FourtuneVersionedEntity} from "#~src/FourtuneVersionedEntity.d.mts"
import type {AllPossibleMajorVersions} from "#~src/AllPossibleMajorVersions.mts"
import type {AllPossibleRevisions} from "#~src/AllPossibleRevisions.d.mts"

export function isEntitySpecific<
	Kind extends Kinds,
	MajorVersion extends AllPossibleMajorVersions,
	Revision extends AllPossibleRevisions
>(
	objectToTest: unknown,
	kind: Kind,
	majorVersion: MajorVersion,
	revision: Revision
) : objectToTest is Entities[Kind][MajorVersion][Revision] {
	const entity = objectToTest as FourtuneVersionedEntity

	if (entity._fourtuneEntityDescriptor.kind !== kind) {
		return false
	}

	if (entity._fourtuneEntityDescriptor.majorVersion !== majorVersion) {
		return false
	}

	return entity._fourtuneEntityDescriptor.revision === revision
}
