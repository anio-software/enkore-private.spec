import type {RealmJSRuntimeLogLevel} from "@enkore/primitives"

import type {
	EnkoreJSRuntimeContext,
	EnkoreRealmJSRuntimeContextOptions
} from "#~src/export/__star_export.mts"

type Operator = 
	">"  |
	">=" |
	"<"  |
	"<="

export type Definition = {
	createContext: (
		ctxOrOptions: EnkoreJSRuntimeContext | EnkoreRealmJSRuntimeContextOptions
	) => EnkoreJSRuntimeContext

	compareLogLevel: (
		left: RealmJSRuntimeLogLevel,
		operator: Operator,
		right: RealmJSRuntimeLogLevel
	) => boolean
}
