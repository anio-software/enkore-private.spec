import type {IDs} from "#~src/apis/IDs.d.mts"
import type {AllDefinedAPIs} from "#~synthetic/user/AllDefinedAPIs.d.mts"
import type {AllDefinedMajorVersions} from "#~src/apis/AllDefinedMajorVersions.d.mts"

export type APIsByIDAndMajorVersion = {
	[ID in IDs]: {
		[MajorVersion in AllDefinedMajorVersions]: Extract<AllDefinedAPIs, {
			apiID: ID
			apiMajorVersion: MajorVersion
		}>
	}
}
