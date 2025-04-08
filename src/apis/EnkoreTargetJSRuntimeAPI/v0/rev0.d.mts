import type {JSRuntimeLogLevel} from "@enkore/primitives"

import type {
	EnkoreJSRuntimeContext,
	EnkoreJSRuntimeContextOptions
} from "#~src/export/__star_export.mts"

type Operator = ">"  |
                ">=" |
                "<"  |
                "<="

export type Definition = {
	createContext: (
		ctxOrOptions: EnkoreJSRuntimeContext | EnkoreJSRuntimeContextOptions | undefined
	) => EnkoreJSRuntimeContext

	compareLogLevel: (
		left: JSRuntimeLogLevel,
		operator: Operator,
		right: JSRuntimeLogLevel
	) => boolean
}
