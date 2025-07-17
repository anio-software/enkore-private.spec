import type {JSRuntimeLogLevel, JSRuntimePackageInformation} from "@anio-software/enkore-private.primitives"
import type {
	EnkoreJSRuntimeContext,
	EnkoreJSRuntimeProject
} from "#~export/__aggregatedExports.ts"

type ContextOptionsGetCurrentLogLevel = (
	context: EnkoreJSRuntimeContext
) => JSRuntimeLogLevel|null

type ContextOptionsPrintLine = (
	context: EnkoreJSRuntimeContext,
	line: string
) => undefined

type ContextOptionsLogWithLevel = (
	context: EnkoreJSRuntimeContext,
	level: JSRuntimeLogLevel,
	lines: string[]
) => undefined

type ContextOptionsShouldLog = (
	context: EnkoreJSRuntimeContext,
	level: JSRuntimeLogLevel,
	tag: string,
	extra: {
		originatingPackage: JSRuntimePackageInformation
		originatingFunction: {name: string}|undefined
	}
) => boolean|null

export type Definition = {
	/**
	 * @brief Information about the project
	 */
	project: EnkoreJSRuntimeProject

	/**
	 * @brief Tag of context, can be empty.
	 */
	tag?: string

	/**
	 * @brief Retrieve the current log level.
	 */
	getCurrentLogLevel?: ContextOptionsGetCurrentLogLevel

	/**
	 * @brief Print a line.
	 */
	printLine?: ContextOptionsPrintLine

	/**
	 * @brief Log lines with a specific log level.
	 */
	logWithLevel?: ContextOptionsLogWithLevel

	/**
	 * @brief Determine whether a message should be logged.
	 * @param level The log level of the message.
	 * @param package_name The package name of the module making the request.
	 * @param tag The tag of the module that is making the request.
	 */
	shouldLog?: ContextOptionsShouldLog

	__internalDoNotUse?: {
		originatingFunction: {name: string}|undefined
		originatingPackage: JSRuntimePackageInformation
	}
}
