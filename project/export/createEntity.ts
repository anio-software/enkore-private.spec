import type {AllEntities} from "#~src/maps/AllEntities.mts"
import type {Kinds} from "#~src/entities/Kinds.mts"
import type {AllDefinedMajorVersions} from "#~src/entities/AllDefinedMajorVersions.mts"
import type {AllDefinedRevisions} from "#~src/entities/AllDefinedRevisions.mts"
import type {UnknownEntity} from "./UnknownEntity.mts"
import type {RawType} from "./RawType.mts"

export function createEntity<
	Kind extends Kinds,
	MajorVersion extends AllDefinedMajorVersions,
	Revision extends AllDefinedRevisions
>(
	kind: Kind,
	majorVersion: MajorVersion,
	revision: Revision,
	entityData: RawType<AllEntities[Kind][MajorVersion][Revision]>,
	createdBy?: UnknownEntity["entityCreatedBy"]
) : AllEntities[Kind][MajorVersion][Revision] {
	const header : UnknownEntity = {
		entityKind: kind,
		entityMajorVersion: majorVersion,
		entityRevision: revision,
		entityCreatedBy: createdBy === undefined ? null : createdBy
	}

	return {
		...header,
		...entityData
	} as AllEntities[Kind][MajorVersion][Revision]
}
