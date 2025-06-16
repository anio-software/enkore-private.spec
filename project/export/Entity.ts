import type {Kinds} from "#~src/entities/Kinds.ts"
import type {AllDefinedMajorVersions} from "#~src/entities/AllDefinedMajorVersions.ts"
import type {AllDefinedRevisions} from "#~src/entities/AllDefinedRevisions.ts"

import type {EntitiesByKind} from "#~src/maps/EntitiesByKind.ts"
import type {EntitiesByKindAndMajorVersion} from "#~src/maps/EntitiesByKindAndMajorVersion.ts"
import type {AllEntities} from "#~src/maps/AllEntities.ts"

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
