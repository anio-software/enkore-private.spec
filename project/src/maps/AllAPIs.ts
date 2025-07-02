import type {IDs} from "#~src/apis/IDs.ts"
import type {AllDefinedMajorVersions} from "#~src/apis/AllDefinedMajorVersions.ts"
import type {AllDefinedRevisions} from "#~src/apis/AllDefinedRevisions.ts"
import type {AllDefinedAPIs} from "#~src/AllDefinedAPIs.ts"

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
