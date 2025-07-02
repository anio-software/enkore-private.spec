import type {AllEntities} from "#~src/maps/AllEntities.ts"
import type {Kinds} from "#~src/entities/Kinds.ts"
import type {AllDefinedMajorVersions} from "#~src/entities/AllDefinedMajorVersions.ts"
import type {AllDefinedRevisions} from "#~src/entities/AllDefinedRevisions.ts"
import type {UnknownEntity} from "./UnknownEntity.ts"
import type {RawType} from "./RawType.ts"

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
