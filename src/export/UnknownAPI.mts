import type {DefineAPI} from "#~src/DefineAPI.mts"
import type {IDs} from "#~src/apis/IDs.mts"

export type UnknownAPI = DefineAPI<
	IDs,
	number,
	number,
	unknown
>
