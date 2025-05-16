import type {IDs} from "#~src/apis/IDs.d.mts"
import type {AllDefinedAPIs} from "#~synthetic/user/AllDefinedAPIs.d.mts"

export type APIsByID = {
	[ID in IDs]: Extract<AllDefinedAPIs, {
		apiID: ID
	}>
}
