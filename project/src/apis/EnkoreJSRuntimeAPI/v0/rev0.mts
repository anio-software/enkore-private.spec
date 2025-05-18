import type {JSRuntimeLogLevel} from "@anio-software/enkore.primitives"

import type {
	EnkoreJSRuntimeContext,
	EnkoreJSRuntimeContextOptions,
	EnkoreJSRuntimeProject
} from "#~export/__aggregatedExports.mts"

type Operator = ">"  |
                ">=" |
                "<"  |
                "<="

export type Definition = {
	createContext: (
		project: EnkoreJSRuntimeProject,
		options: EnkoreJSRuntimeContextOptions | undefined
	) => EnkoreJSRuntimeContext

	compareLogLevel: (
		left: JSRuntimeLogLevel,
		operator: Operator,
		right: JSRuntimeLogLevel
	) => boolean
}
