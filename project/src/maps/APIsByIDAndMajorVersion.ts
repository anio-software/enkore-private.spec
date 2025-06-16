import type {IDs} from "#~src/apis/IDs.ts"
import type {AllDefinedAPIs} from "#~src/AllDefinedAPIs.ts"
import type {AllDefinedMajorVersions} from "#~src/apis/AllDefinedMajorVersions.ts"

export type APIsByIDAndMajorVersion = {
	[ID in IDs]: {
		[MajorVersion in AllDefinedMajorVersions]: Extract<AllDefinedAPIs, {
			apiID: ID
			apiMajorVersion: MajorVersion
		}>
	}
}
