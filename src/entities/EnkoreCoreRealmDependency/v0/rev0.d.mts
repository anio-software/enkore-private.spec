import type {NodePackageJSON} from "@enkore/primitives"

export type Definition = {
	path: string
	version: string
	importedDependencyObject: unknown
	dependencyPackageJSON: NodePackageJSON
}
