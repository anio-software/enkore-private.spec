import type {RealmJSRuntimeLogLevel} from "@enkore/primitives"

import type {
	EnkoreJSRuntimeContext,
	EnkoreJSRuntimeContextOptions
} from "#~src/export/__star_export.mts"

type Operator = 
	">"  |
	">=" |
	"<"  |
	"<="

export type Definition = {
	createContext: (
		ctxOrOptions: EnkoreJSRuntimeContext | EnkoreJSRuntimeContextOptions
	) => EnkoreJSRuntimeContext

	compareLogLevel: (
		left: RealmJSRuntimeLogLevel,
		operator: Operator,
		right: RealmJSRuntimeLogLevel
	) => boolean
}
