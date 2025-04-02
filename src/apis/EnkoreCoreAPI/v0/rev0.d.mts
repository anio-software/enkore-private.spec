import type {TargetIdentifier} from "@enkore/primitives"
import type {
	EnkoreTargetIntegrationAPI,
	EnkoreCoreTargetDependency
} from "#~src/export/__star_export.mts"

export type Definition = {
	setDebugMode: (mode: boolean) => boolean
	getDebugMode: () => boolean

	createTemporaryFile: (
		projectRoot: string, fileExtension?: string
	) => Promise<string>

	createTemporaryDirectory: (
		projectRoot: string
	) => Promise<string>

	//
	// - loads the target integration api
	// - installs the target dependencies
	// - manages the lockfile
	//
	initializeProject: (
		projectRoot: string | ["inferFromCLIArgs"],
		isCIEnvironment: boolean,
		options?: {
			npmBinaryPath?: string,
			force?: boolean
		}
	) => Promise<EnkoreTargetIntegrationAPI>

	getInstalledRealmDependencyNames: (
		projectRoot: string | ["inferFromCLIArgs"],
		realm: TargetIdentifier,
	) => Promise<string[]>

	loadRealmDependency: (
		projectRoot: string | ["inferFromCLIArgs"],
		realm: TargetIdentifier,
		dependencyName: string
	) => Promise<EnkoreCoreTargetDependency>

	findProjectRootFromDirectory: (
		startDirectory: string
	) => Promise<string|false>
}
