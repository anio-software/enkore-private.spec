import type {EnkoreConfig} from "#~export/__aggregatedExports.ts"
import type {NodePackageJSON} from "@anio-software/enkore-private.primitives"
import type {JSONCompatibleType} from "#~export/JSONCompatibleType.ts"

export type Definition = {
	projectId: string
	packageJSON: NodePackageJSON
	enkoreConfiguration: JSONCompatibleType<EnkoreConfig>
}
