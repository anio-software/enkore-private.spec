import type {RealmJSRuntimeLogLevel, RealmJSRuntimePackageInformation} from "@fourtune/primitives"
import type {EntityOfKind} from "#~src/export/EntityOfKind.d.mts"

type LogMethod = {
	[K in RealmJSRuntimeLogLevel]: (...messages: string[]) => undefined
} & {
	/**
	 * @brief Log a message with a severity.
	 */
	(...messages: string[]) : undefined
}

export type Definition = {
	readonly __internalDoNotUse: {
		originPackage: RealmJSRuntimePackageInformation
	}

	log: LogMethod

	project: EntityOfKind<"FourtuneRealmJSRuntimeProject">
	options: EntityOfKind<"FourtuneRealmJSRuntimeContextOptions">
}
