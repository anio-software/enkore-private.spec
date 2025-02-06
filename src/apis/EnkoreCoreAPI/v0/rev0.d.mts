import type {RealmName} from "@enkore/primitives"
import type {NodePackageJSON} from "@enkore/primitives"
import type {EnkoreRealmIntegrationAPI} from "#~src/export/__star_export.mts"

type LoadedDependency = {
	path: string
	version: string
	importedDependencyObject: unknown
	dependencyPackageJSON: NodePackageJSON
}

export type Definition = {
	setDebugMode: (mode: boolean) => boolean

	//
	// - loads the realm integration api
	// - installs the realm dependencies
	// - manages the lockfile
	//
	initializeProject: (
		projectRoot: string | ["inferFromCLIArgs"],
		isCIEnvironment: boolean,
		options?: {
			npmBinaryPath?: string,
			force?: boolean
		}
	) => Promise<EnkoreRealmIntegrationAPI>

	loadRealmDependency: (
		projectRoot: string | ["inferFromCLIArgs"],
		realm: RealmName,
		dependencyName: string
	) => Promise<LoadedDependency>

	findProjectRootFromDirectory: (
		startDirectory: string
	) => Promise<string|false>
}
