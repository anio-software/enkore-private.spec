import type {NodePackageJSON} from "@anio-software/enkore-private.primitives"

export type Definition = {
	projectId: string
	packageJSON: NodePackageJSON
	enkoreConfiguration: {
		buildConstants?: Record<string, string>

		[prop: string]: unknown
	}
}
