import type {DefineEnkoreTarget} from "#~src/DefineEnkoreTarget.d.mts"

export type Definition = DefineEnkoreTarget<
	"c", {
		platform: string[]
	}
>
