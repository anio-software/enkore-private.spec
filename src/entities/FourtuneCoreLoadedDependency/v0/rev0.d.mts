export type Definition = {
	path: string
	version: string
	importedDependencyObject: unknown
	dependencyPackageJSON: Record<string, unknown>
}
