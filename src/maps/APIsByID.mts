import type {IDs} from "#~src/apis/IDs.mts"
import type {AllDefinedAPIs} from "#~synthetic/user/AllDefinedAPIs.mts"

export type APIsByID = {
	[ID in IDs]: Extract<AllDefinedAPIs, {
		apiID: ID
	}>
}
