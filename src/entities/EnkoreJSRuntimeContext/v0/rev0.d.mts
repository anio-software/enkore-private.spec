import type {
	JSRuntimeLogLevel,
	NodePackageJSON,
	JSRuntimePackageInformation
} from "@enkore/primitives"
import type {
	EnkoreConfig,
	EnkoreJSRuntimeContextOptions,
	EnkoreJSRuntimeProject
} from "#~src/export/__star_export.mts"

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

	currentProject: EnkoreJSRuntimeProject

	options: EnkoreJSRuntimeContextOptions

	originatingPackage: JSRuntimePackageInformation
}
