import type {
	EnkoreTargetIntegrationAPI,
	EnkoreLockFile
} from "#~export/__aggregatedExports.ts"
import type {
	ToolchainSpecifier,
	UnknownToolchain
} from "@anio-software/enkore-private.primitives"

export type Definition = {
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
			npmBinaryPath?: string
			force?: boolean
			forceToolchain?: ToolchainSpecifier|false
		}
	) => Promise<{
		// tells us whether the target integration was loaded from an
		// internal package namespace (@asint) or public one (@enkore)

		// this is used to restrict what toolchains can be installed
		// (i.e. public packages cannot install internal toolchains)
		readonly _targetIntegrationPackageNamespace: string

		readonly initialLockFile: EnkoreLockFile

		targetIntegrationAPI: EnkoreTargetIntegrationAPI

		updateLockfileAutogeneratedFiles: (
			files: {
				[path: string]: {
					hash: string
				}
			}
		) => Promise<EnkoreLockFile>
	}>

	loadToolchain: (
		projectRoot: string | ["inferFromCLIArgs"]
	) => Promise<UnknownToolchain>

	findProjectRootFromDirectory: (
		startDirectory: string
	) => Promise<string|false>
}
