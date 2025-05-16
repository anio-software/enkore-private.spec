import type {DefineAPI} from "#~src/DefineAPI.d.mts"
import type {IDs} from "#~src/apis/IDs.d.mts"

export type UnknownAPI = DefineAPI<
	IDs,
	number,
	number,
	unknown
>
