import type {DefineAPI} from "#~src/DefineAPI.ts"
import type {IDs} from "#~src/apis/IDs.ts"

export type UnknownAPI = DefineAPI<
	IDs,
	number,
	number,
	unknown
>
