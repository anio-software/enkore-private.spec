import type {DefineEnkoreTarget} from "#~src/DefineEnkoreTarget.d.mts"
import type {CommonJSTargetOptions} from "#~src/CommonJSTargetOptions.d.mts"

export type Definition = DefineEnkoreTarget<
	"js-none", CommonJSTargetOptions & {}
>
