import type {Kinds} from "#~src/entities/Kinds.ts"
import type {AllDefinedMajorVersions} from "#~src/entities/AllDefinedMajorVersions.ts"
import type {AllDefinedRevisions} from "#~src/entities/AllDefinedRevisions.ts"
import type {AllDefinedEntities} from "#~src/AllDefinedEntities.ts"

export type AllEntities = {
	[Kind in Kinds]: {
		[MajorVersion in AllDefinedMajorVersions]: {
			[Revision in AllDefinedRevisions]: Extract<AllDefinedEntities, {
				entityKind: Kind
				entityMajorVersion: MajorVersion
				entityRevision: Revision
			}>
		}
	}
}
