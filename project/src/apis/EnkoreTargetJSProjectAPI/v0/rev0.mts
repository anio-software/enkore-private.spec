import type {NodePackageJSON} from "@anio-software/enkore-private.primitives"
import type {EnkoreConfig} from "#~export/__aggregatedExports.mts"
import type {JSONCompatibleType} from "#~export/JSONCompatibleType.mts"

import type {EnkoreJSRuntimeProject} from "#~export/__aggregatedExports.mts"

export type Definition = {
	getProjectPackageJSON: () => NodePackageJSON
	getEnkoreConfiguration: () => JSONCompatibleType<EnkoreConfig>
	getProject: () => EnkoreJSRuntimeProject
	getProjectId: () => string

	getEmbedAsString: (asset: string) => string
	getEmbedAsUint8Array: (asset: string) => Uint8Array
	getEmbedAsURL: (asset: string) => string
}
