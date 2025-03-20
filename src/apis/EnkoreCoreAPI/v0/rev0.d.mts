import type {RealmName} from "@enkore/primitives"
import type {
	EnkoreRealmIntegrationAPI,
	EnkoreCoreRealmDependency
} from "#~src/export/__star_export.mts"

export type Definition = {
	setDebugMode: (mode: boolean) => boolean
	getDebugMode: () => boolean

	createTemporaryFile: (fileExtension?: string) => Promise<string>
	createTemporaryDirectory: () => Promise<string>

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

	getInstalledRealmDependencyNames: (
		projectRoot: string | ["inferFromCLIArgs"],
		realm: RealmName,
	) => Promise<string[]>

	loadRealmDependency: (
		projectRoot: string | ["inferFromCLIArgs"],
		realm: RealmName,
		dependencyName: string
	) => Promise<EnkoreCoreRealmDependency>

	findProjectRootFromDirectory: (
		startDirectory: string
	) => Promise<string|false>
}
