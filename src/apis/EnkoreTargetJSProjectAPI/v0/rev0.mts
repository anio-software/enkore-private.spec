import type {NodePackageJSON} from "@enkore/primitives"
import type {EnkoreConfig} from "#~src/export/__aggregatedExports.mts"
import type {JSONCompatibleType} from "#~src/export/JSONCompatibleType.mts"

import type {EnkoreJSRuntimeProject} from "#~src/export/__aggregatedExports.mts"

export type Definition = {
	getProjectPackageJSON: () => NodePackageJSON
	getEnkoreConfiguration: () => JSONCompatibleType<EnkoreConfig>
	getProject: () => EnkoreJSRuntimeProject
	getProjectId: () => string

	getEmbedAsString: (asset: string) => string
	getEmbedAsUint8Array: (asset: string) => Uint8Array
	getEmbedAsURL: (asset: string) => string
}
