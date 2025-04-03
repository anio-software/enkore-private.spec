import type {EnkoreConfig} from "#~src/export/__star_export.mts"
import type {JSONCompatibleType} from "#~src/export/JSONCompatibleType.d.mts"
import type {NodePackageJSON} from "@enkore/primitives"

export type Definition = {
	getProjectPackageJSON: () => NodePackageJSON
	getEnkoreConfiguration: () => JSONCompatibleType<EnkoreConfig>
	getProject: () => {
		packageJSON: NodePackageJSON
		enkoreConfiguration: JSONCompatibleType<EnkoreConfig>
	}
}
