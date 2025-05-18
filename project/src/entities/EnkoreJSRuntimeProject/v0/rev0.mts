import type {NodePackageJSON} from "@anio-software/enkore.primitives"
import type {EnkoreConfig} from "#~export/__aggregatedExports.mts"
import type {JSONCompatibleType} from "#~export/JSONCompatibleType.mts"

export type Definition = {
	projectId: string
	packageJSON: NodePackageJSON
	enkoreConfiguration: JSONCompatibleType<EnkoreConfig>
}
