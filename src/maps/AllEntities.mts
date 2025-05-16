import type {Kinds} from "#~src/entities/Kinds.mts"
import type {AllDefinedMajorVersions} from "#~src/entities/AllDefinedMajorVersions.mts"
import type {AllDefinedRevisions} from "#~src/entities/AllDefinedRevisions.mts"
import type {AllDefinedEntities} from "#~synthetic/user/AllDefinedEntities.mts"

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
