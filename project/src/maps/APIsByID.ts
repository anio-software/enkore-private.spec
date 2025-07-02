import type {IDs} from "#~src/apis/IDs.ts"
import type {AllDefinedAPIs} from "#~src/AllDefinedAPIs.ts"

export type APIsByID = {
	[ID in IDs]: Extract<AllDefinedAPIs, {
		apiID: ID
	}>
}
