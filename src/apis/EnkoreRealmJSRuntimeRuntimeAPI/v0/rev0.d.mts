import type {RealmJSRuntimeLogLevel} from "@enkore/primitives"

import type {
	EnkoreRealmJSRuntimeContext,
	EnkoreRealmJSRuntimeContextOptions
} from "#~src/export/__star_export.mts"

type Operator = 
	">"  |
	">=" |
	"<"  |
	"<="

export type Definition = {
	createContext: (
		ctxOrOptions: EnkoreRealmJSRuntimeContext | EnkoreRealmJSRuntimeContextOptions
	) => EnkoreRealmJSRuntimeContext

	compareLogLevel: (
		left: RealmJSRuntimeLogLevel,
		operator: Operator,
		right: RealmJSRuntimeLogLevel
	) => boolean
}
