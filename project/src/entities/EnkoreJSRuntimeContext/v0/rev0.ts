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

type LogExceptionFunction = {
	(description: string, error: unknown): undefined
	(error: unknown): undefined
}

type LogExceptionMethod = {
	[K in JSRuntimeLogLevel]: LogExceptionFunction
} & LogExceptionFunction

export type Definition = {
	log: LogMethod
	// logException is a bit less ambiguous
	// the default log level for exceptions is 'error'
	logException: LogExceptionMethod

	readonly currentProject: EnkoreJSRuntimeProject
	readonly currentPackage: JSRuntimePackageInformation

	readonly optionsUsedToCreateContext: EnkoreJSRuntimeContextOptions
}
