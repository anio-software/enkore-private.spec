import type {Kinds} from "#~src/Kinds.d.mts"
import type {AllPossibleMajorVersions} from "#~src/AllPossibleMajorVersions.d.mts"
import type {EntitiesByKindAndMajorVersion} from "#~src/maps/EntitiesByKindAndMajorVersion.d.mts"
import type {FourtuneVersionedEntity} from "#~src/FourtuneVersionedEntity.d.mts"

export function isEntity<
	Kind extends Kinds,
	MajorVersion extends AllPossibleMajorVersions
>(
	objectToTest: unknown,
	kind: Kind,
	majorVersion: MajorVersion
) : objectToTest is EntitiesByKindAndMajorVersion[Kind][MajorVersion] {
	const entity = objectToTest as FourtuneVersionedEntity

	if (entity._fourtuneEntityDescriptor.kind !== kind) {
		return false
	}

	return entity._fourtuneEntityDescriptor.majorVersion === majorVersion
}
