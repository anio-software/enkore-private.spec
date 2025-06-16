import type {NodePackageJSON} from "@anio-software/enkore-private.primitives"
import type {EnkoreConfig} from "#~export/__aggregatedExports.ts"
import type {JSONCompatibleType} from "#~export/JSONCompatibleType.ts"

export type Definition = {
	projectId: string
	packageJSON: NodePackageJSON
	enkoreConfiguration: JSONCompatibleType<EnkoreConfig>
}
