import type {RealmJSRuntimeLogLevel} from "@fourtune/primitives"

import type {
	FourtuneRealmJSRuntimeContext,
	FourtuneRealmJSRuntimeContextOptions
} from "#~src/export/__star_export.mts"

type Operator = 
	">"  |
	">=" |
	"<"  |
	"<="

export type Definition = {
	createContext: (
		ctxOrOptions: FourtuneRealmJSRuntimeContext | FourtuneRealmJSRuntimeContextOptions
	) => FourtuneRealmJSRuntimeContext

	compareLogLevel: (
		left: RealmJSRuntimeLogLevel,
		operator: Operator,
		right: RealmJSRuntimeLogLevel
	) => boolean
}
