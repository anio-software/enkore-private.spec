import type {IDs} from "#~src/apis/IDs.mts"
import type {AllDefinedAPIs} from "#~src/AllDefinedAPIs.mts"

export type APIsByID = {
	[ID in IDs]: Extract<AllDefinedAPIs, {
		apiID: ID
	}>
}
