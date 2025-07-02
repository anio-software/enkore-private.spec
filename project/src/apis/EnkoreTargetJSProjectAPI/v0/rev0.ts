import type {NodePackageJSON} from "@anio-software/enkore-private.primitives"
import type {EnkoreConfig} from "#~export/__aggregatedExports.ts"
import type {JSONCompatibleType} from "#~export/JSONCompatibleType.ts"

import type {EnkoreJSRuntimeProject} from "#~export/__aggregatedExports.ts"

export type Definition = {
	getProjectPackageJSON: () => NodePackageJSON
	getEnkoreConfiguration: () => JSONCompatibleType<EnkoreConfig>
	getProject: () => EnkoreJSRuntimeProject
	getProjectId: () => string

	getEmbedAsString: (asset: string) => string
	getEmbedAsUint8Array: (asset: string) => Uint8Array
	getEmbedAsURL: (asset: string) => string
}
