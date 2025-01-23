import type {Kinds} from "#~src/Kinds.d.mts"
import type {AllPossibleEntities} from "#~synthetic/user/AllPossibleEntities.d.mts"
import type {AllPossibleMajorVersions} from "#~src/AllPossibleMajorVersions.d.mts"
import type {AllPossibleRevisions} from "#~src/AllPossibleRevisions.d.mts"

export type Entities = {
	[Kind in Kinds]: {
		[MajorVersion in AllPossibleMajorVersions]: {
			[Revision in AllPossibleRevisions]: Extract<AllPossibleEntities, {
				_fourtuneEntityDescriptor: {
					kind: Kind
					majorVersion: MajorVersion
					revision: Revision
				}
			}>
		}
	}
}
