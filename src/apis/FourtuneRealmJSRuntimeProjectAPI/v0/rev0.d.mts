import type {FourtuneConfig} from "#~src/export/__star_export.mts"
import type {JSONCompatibleType} from "#~src/export/JSONCompatibleType.d.mts"

type PackageJSON = {
	name: string
	version: string
	description?: string
	author?: string
	license?: string

	[prop : string]: any
}

export type Definition = {
	getProjectPackageJSON: () => PackageJSON
	getFourtuneConfiguration: () => JSONCompatibleType<FourtuneConfig>
	getProject: () => {
		packageJSON: PackageJSON
		fourtuneConfiguration: JSONCompatibleType<FourtuneConfig>
	}
}
