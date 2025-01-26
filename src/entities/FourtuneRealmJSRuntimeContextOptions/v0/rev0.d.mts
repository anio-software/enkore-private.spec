import type {RealmJSRuntimeLogLevel, RealmJSRuntimePackageInformation} from "@fourtune/primitives"
import type {EntityOfKind} from "#~src/export/EntityOfKind.d.mts"

type ContextInstance = EntityOfKind<"FourtuneRealmJSRuntimeContext">

type ContextOptionsGetCurrentLogLevel = (
	context: ContextInstance
) => RealmJSRuntimeLogLevel|null

type ContextOptionsPrintLine = (
	context: ContextInstance,
	line: string
) => undefined

type ContextOptionsLogWithLevel = (
	context: ContextInstance,
	level: RealmJSRuntimeLogLevel,
	lines: string[]
) => undefined

type ContextOptionsShouldLog = (
	context: ContextInstance,
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
