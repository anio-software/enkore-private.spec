import type {Kinds} from "#~src/entities/Kinds.mts"
import type {AllDefinedMajorVersions} from "#~src/entities/AllDefinedMajorVersions.mts"
import type {AllDefinedRevisions} from "#~src/entities/AllDefinedRevisions.mts"

import type {EntitiesByKind} from "#~src/maps/EntitiesByKind.mts"
import type {EntitiesByKindAndMajorVersion} from "#~src/maps/EntitiesByKindAndMajorVersion.mts"
import type {AllEntities} from "#~src/maps/AllEntities.mts"

type MajorVersions = AllDefinedMajorVersions | void
type Revisions = AllDefinedRevisions | void

export type Entity<
	Kind extends Kinds,
	MajorVersion extends MajorVersions = void,
	Revision extends Revisions = void
> = 
	MajorVersion extends AllDefinedMajorVersions ? 
		Revision extends AllDefinedRevisions ?
			AllEntities[Kind][MajorVersion][Revision] :
			EntitiesByKindAndMajorVersion[Kind][MajorVersion] :
			EntitiesByKind[Kind]
