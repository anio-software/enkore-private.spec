import type {AllEntities} from "#~src/maps/AllEntities.d.mts"
import type {Kinds} from "#~src/Kinds.d.mts"
import type {AllDefinedMajorVersions} from "#~src/AllDefinedMajorVersions.d.mts"
import type {AllDefinedRevisions} from "#~src/AllDefinedRevisions.d.mts"
import type {GenericEntity} from "./GenericEntity.d.mts"

type EntityKeys = keyof GenericEntity

export function createEntity<
	Kind extends Kinds,
	MajorVersion extends AllDefinedMajorVersions,
	Revision extends AllDefinedRevisions
>(
	kind: Kind,
	majorVersion: MajorVersion,
	revision: Revision,
	entityData: Omit<AllEntities[Kind][MajorVersion][Revision], EntityKeys>,
	createdBy?: GenericEntity["entityCreatedBy"]
) : AllEntities[Kind][MajorVersion][Revision] {
	const header : GenericEntity = {
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
