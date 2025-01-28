import type {RealmJSRuntimeLogLevel, RealmJSRuntimePackageInformation} from "@fourtune/primitives"
import type {FourtuneRealmJSRuntimeContext} from "#~src/export/__star_export.mts"

type ContextOptionsGetCurrentLogLevel = (
	context: FourtuneRealmJSRuntimeContext
) => RealmJSRuntimeLogLevel|null

type ContextOptionsPrintLine = (
	context: FourtuneRealmJSRuntimeContext,
	line: string
) => undefined

type ContextOptionsLogWithLevel = (
	context: FourtuneRealmJSRuntimeContext,
	level: RealmJSRuntimeLogLevel,
	lines: string[]
) => undefined

type ContextOptionsShouldLog = (
	context: FourtuneRealmJSRuntimeContext,
	level: RealmJSRuntimeLogLevel,
	pkg: RealmJSRuntimePackageInformation,
	tag: string
) => boolean|null

export type Definition = {
	/**
	 * @brief Tag of context, can be empty.
	 */
	tag: string

	/**
	 * @brief Retrieve the current log level.
	 */
	getCurrentLogLevel: ContextOptionsGetCurrentLogLevel

	/**
	 * @brief Print a line.
	 */
	printLine: ContextOptionsPrintLine

	/**
	 * @brief Log lines with a specific log level.
	 */
	logWithLevel: ContextOptionsLogWithLevel

	/**
	 * @brief Determine whether a message should be logged.
	 * @param level The log level of the message.
	 * @param package_name The package name of the module making the request.
	 * @param tag The tag of the module that is making the request.
	 */
	shouldLog: ContextOptionsShouldLog
}
