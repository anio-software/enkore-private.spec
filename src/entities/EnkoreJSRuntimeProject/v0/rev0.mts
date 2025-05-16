import type {NodePackageJSON} from "@enkore/primitives"
import type {EnkoreConfig} from "#~src/export/__aggregatedExports.mts"
import type {JSONCompatibleType} from "#~src/export/JSONCompatibleType.mts"

export type Definition = {
	projectId: string
	packageJSON: NodePackageJSON
	enkoreConfiguration: JSONCompatibleType<EnkoreConfig>
}
