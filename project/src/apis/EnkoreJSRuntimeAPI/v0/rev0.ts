import type {JSRuntimeLogLevel} from "@anio-software/enkore-private.primitives"
import type {EnkoreJSRuntimeContextOptions} from "#~export/__aggregatedExports.ts"
import type {RawType} from "#~export/RawType.ts"

type Operator = ">"  |
                ">=" |
                "<"  |
                "<="

export type Definition = {
	defineContextOptions: (
		options: RawType<EnkoreJSRuntimeContextOptions>
	) => EnkoreJSRuntimeContextOptions

	compareLogLevel: (
		left: JSRuntimeLogLevel,
		operator: Operator,
		right: JSRuntimeLogLevel
	) => boolean
}
