import type {FourtuneConfig} from "#~src/export/__star_export.mts"
import type {JSONCompatibleType} from "#~src/export/JSONCompatibleType.d.mts"
import type {NodePackageJSON} from "@enkore/primitives"

export type Definition = {
	getProjectPackageJSON: () => NodePackageJSON
	getFourtuneConfiguration: () => JSONCompatibleType<FourtuneConfig>
	getProject: () => {
		packageJSON: NodePackageJSON
		fourtuneConfiguration: JSONCompatibleType<FourtuneConfig>
	}
}
