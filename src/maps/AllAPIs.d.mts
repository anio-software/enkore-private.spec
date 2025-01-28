import type {IDs} from "#~src/apis/IDs.d.mts"
import type {AllDefinedMajorVersions} from "#~src/apis/AllDefinedMajorVersions.d.mts"
import type {AllDefinedRevisions} from "#~src/apis/AllDefinedRevisions.d.mts"
import type {AllDefinedAPIs} from "#~synthetic/user/AllDefinedAPIs.d.mts"

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
