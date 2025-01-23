import type {Kinds} from "#~src/Kinds.d.mts"
import type {AllPossibleMajorVersions} from "#~src/AllPossibleMajorVersions.d.mts"
import type {AllPossibleRevisions} from "#~src/AllPossibleRevisions.d.mts"
import type {Entities} from "#~src/maps/Entities.d.mts"

export type EntityType<
	Kind extends Kinds,
	MajorVersion extends AllPossibleMajorVersions,
	Revision extends AllPossibleRevisions
> = Entities[Kind][MajorVersion][Revision]
