import type {
	JSRuntimeLogLevel,
	JSRuntimePackageInformation
} from "@anio-software/enkore-private.primitives"
import type {
	EnkoreJSRuntimeContextOptions,
	EnkoreJSRuntimeProject
} from "#~export/__aggregatedExports.ts"

type LogMethod = {
	[K in JSRuntimeLogLevel]: (...messages: string[]) => undefined
} & {
	/**
	 * @brief Log a message with a severity.
	 */
	(...messages: string[]) : undefined
}

export type Definition = {
	log: LogMethod

	readonly currentProject: EnkoreJSRuntimeProject
	readonly currentPackage: JSRuntimePackageInformation
	readonly options: EnkoreJSRuntimeContextOptions
}
