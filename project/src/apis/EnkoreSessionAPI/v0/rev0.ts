import type {
	EnkoreConfig,
	EnkoreAutogeneratedFile,
	EnkoreProjectFile,
	EnkoreNodeAPIOptions,
	EnkoreLockFile
} from "#~export/__aggregatedExports.ts"
import type {NodeAPIMessage, NodePackageJSON} from "@anio-software/enkore-private.primitives"
import type {AllEnkoreTargetOptions} from "#~src/AllEnkoreTargetOptions.ts"
import type {TargetIdentifier, UnknownToolchain} from "@anio-software/enkore-private.primitives"
import type {TargetIdentifierToEntityName} from "#~src/TargetIdentifierToEntityName.ts"

type TargetOptionsMap = {
	[K in TargetIdentifier]: Extract<AllEnkoreTargetOptions, {
		entityKind: TargetIdentifierToEntityName<K>
	}>
}

export type Definition = {
	project: {
		root: string
		config: EnkoreConfig
		packageJSON: NodePackageJSON
	}

	target: {
		readonly identifier: TargetIdentifier

		getOptions: <T extends TargetIdentifier>(
			expectedTargetIdentifier: T
		) => TargetOptionsMap[T]

		__getInternalData: () => object
		__getCurrentlyInstalledToolchain: () => UnknownToolchain
	}

	git: {
		readonly commitHash: string
		readonly commitHashShort: string
		readonly tags: string[]
	}|null

	enkore: {
		getVersions: () => {
			enkore: string
			core: string
			target: string
		}

		// nb: should throw error if called before hashes are updated in the lockfile
		getLockFile: () => EnkoreLockFile

		getOptions: () => EnkoreNodeAPIOptions

		getCurrentStep: () => string|undefined

		emitMessage: {
			(
				severity: NodeAPIMessage["severity"],
				message: NodeAPIMessage["message"]
			) : undefined

			(
				severity: NodeAPIMessage["severity"],
				id: NodeAPIMessage["id"],
				message: NodeAPIMessage["message"]
			) : undefined
		}

		getProjectFiles: (
			relativeBaseDir?: string|string[]|undefined
		) => EnkoreProjectFile[]

		getAllProjectFiles: (
			relativeBaseDir?: string|string[]|undefined
		) => EnkoreProjectFile[]

		getCreatedObjectFilesForRelativeSourcePath: (
			srcFilePath: string
		) => string[]
	}

	addAutogeneratedFile: (file: EnkoreAutogeneratedFile) => undefined
}
