import type {IDs} from "#~src/apis/IDs.mts"
import type {AllDefinedMajorVersions} from "#~src/apis/AllDefinedMajorVersions.mts"
import type {AllDefinedRevisions} from "#~src/apis/AllDefinedRevisions.mts"
import type {AllDefinedAPIs} from "#~synthetic/user/AllDefinedAPIs.mts"

export type AllAPIs = {
	[ID in IDs]: {
		[MajorVersion in AllDefinedMajorVersions]: {
			[Revision in AllDefinedRevisions]: Extract<AllDefinedAPIs, {
				apiID: ID
				apiMajorVersion: MajorVersion
				apiRevision: Revision
			}>
		}
	}
}
