import type {NodePackageJSON} from "@enkore/primitives"
import type {EnkoreConfig} from "#~src/export/__star_export.mts"
import type {JSONCompatibleType} from "#~src/export/JSONCompatibleType.d.mts"

export type Definition = {
	packageJSON: NodePackageJSON
	enkoreConfiguration: JSONCompatibleType<EnkoreConfig>
}
