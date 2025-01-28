import type {AllEntities} from "#~src/maps/AllEntities.d.mts"
import type {Kinds} from "#~src/entities/Kinds.d.mts"
import type {AllDefinedMajorVersions} from "#~src/entities/AllDefinedMajorVersions.d.mts"
import type {AllDefinedRevisions} from "#~src/entities/AllDefinedRevisions.d.mts"
import type {UnknownEntity} from "./UnknownEntity.d.mts"
import type {StripEntityProperties} from "./StripEntityProperties.d.mts"

export function createEntity<
	Kind extends Kinds,
	MajorVersion extends AllDefinedMajorVersions,
	Revision extends AllDefinedRevisions
>(
	kind: Kind,
	majorVersion: MajorVersion,
	revision: Revision,
	entityData: StripEntityProperties<AllEntities[Kind][MajorVersion][Revision]>,
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
