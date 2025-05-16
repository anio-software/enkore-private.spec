import type {IDs} from "#~src/apis/IDs.mts"
import type {AllDefinedAPIs} from "#~synthetic/user/AllDefinedAPIs.mts"
import type {AllDefinedMajorVersions} from "#~src/apis/AllDefinedMajorVersions.mts"

export type APIsByIDAndMajorVersion = {
	[ID in IDs]: {
		[MajorVersion in AllDefinedMajorVersions]: Extract<AllDefinedAPIs, {
			apiID: ID
			apiMajorVersion: MajorVersion
		}>
	}
}
