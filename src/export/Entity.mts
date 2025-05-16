import type {Kinds} from "#~src/entities/Kinds.d.mts"
import type {AllDefinedMajorVersions} from "#~src/entities/AllDefinedMajorVersions.d.mts"
import type {AllDefinedRevisions} from "#~src/entities/AllDefinedRevisions.d.mts"

import type {EntitiesByKind} from "#~src/maps/EntitiesByKind.d.mts"
import type {EntitiesByKindAndMajorVersion} from "#~src/maps/EntitiesByKindAndMajorVersion.d.mts"
import type {AllEntities} from "#~src/maps/AllEntities.d.mts"

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
