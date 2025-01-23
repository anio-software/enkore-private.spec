import type {Kinds} from "#~src/Kinds.d.mts"
import type {AllPossibleMajorVersions} from "#~src/AllPossibleMajorVersions.d.mts"
import type {AllPossibleRevisions} from "#~src/AllPossibleRevisions.d.mts"
import type {Entities} from "#~src/maps/Entities.d.mts"
import type {FourtuneVersionedEntity} from "#~src/FourtuneVersionedEntity.d.mts"
import {createEntityGeneric} from "./createEntityGeneric.mts"

type ProducedByPackage = FourtuneVersionedEntity["_fourtuneEntityDescriptor"]["producedBy"]

export function createEntityOfKind<
	Kind extends Kinds,
	MajorVersion extends AllPossibleMajorVersions,
	Revision extends AllPossibleRevisions
>(
	kind: Kind,
	majorVersion: MajorVersion,
	revision: Revision,
	entityData: Omit<Entities[Kind][MajorVersion][Revision], "_fourtuneEntityDescriptor">,
	createdByPackage?: ProducedByPackage|null|undefined
) : Entities[Kind] {
	return createEntityGeneric(kind, majorVersion, revision, entityData, createdByPackage) as any
}
