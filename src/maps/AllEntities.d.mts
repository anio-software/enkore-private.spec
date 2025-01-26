import type {Kinds} from "#~src/Kinds.d.mts"
import type {AllDefinedMajorVersions} from "#~src/AllDefinedMajorVersions.d.mts"
import type {AllDefinedRevisions} from "#~src/AllDefinedRevisions.d.mts"
import type {AllDefinedEntities} from "#~synthetic/user/AllDefinedEntities.d.mts"

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
