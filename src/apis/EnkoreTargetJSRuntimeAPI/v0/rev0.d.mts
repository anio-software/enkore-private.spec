import type {
	JSRuntimeLogLevel,
	NodePackageJSON
} from "@enkore/primitives"

import type {
	EnkoreJSRuntimeContext,
	EnkoreJSRuntimeContextOptions,
	EnkoreConfig
} from "#~src/export/__star_export.mts"

import type {JSONCompatibleType} from "#~src/export/JSONCompatibleType.d.mts"

type Operator = 
	">"  |
	">=" |
	"<"  |
	"<="

export type Definition = {
	createContext: (
		ctxOrOptions: EnkoreJSRuntimeContext | EnkoreJSRuntimeContextOptions | undefined
	) => EnkoreJSRuntimeContext

	compareLogLevel: (
		left: JSRuntimeLogLevel,
		operator: Operator,
		right: JSRuntimeLogLevel
	) => boolean

	getProjectPackageJSON: () => NodePackageJSON
	getEnkoreConfiguration: () => JSONCompatibleType<EnkoreConfig>
	getProject: () => {
		packageJSON: NodePackageJSON
		enkoreConfiguration: JSONCompatibleType<EnkoreConfig>
	}

	getEmbedAsString: (asset: string) => string
	getEmbedAsUint8Array: (asset: string) => Uint8Array
	getEmbedAsURL: (asset: string) => string
}
