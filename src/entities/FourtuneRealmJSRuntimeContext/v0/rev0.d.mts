import type {RealmJSRuntimeLogLevel, RealmJSRuntimePackageInformation} from "@fourtune/primitives"
import type {
	FourtuneRealmJSRuntimeProject,
	FourtuneRealmJSRuntimeContextOptions
} from "#~src/export/__star_export.mts"

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
		// RealmJSRuntimePackageInformation is intentionally
		// less informative than the NodePackageJSON type
		originPackage: RealmJSRuntimePackageInformation
	}

	log: LogMethod

	project: FourtuneRealmJSRuntimeProject
	options: FourtuneRealmJSRuntimeContextOptions
}
