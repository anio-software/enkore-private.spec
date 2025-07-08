import type {EnkoreLockFile} from "#~export/__aggregatedExports.ts"
import type {ToolchainSpecifier, TargetIdentifier} from "@anio-software/enkore-private.primitives"

export type Definition = {
	createdAt: number

	actualToolchain: ToolchainSpecifier
	lockFile: EnkoreLockFile

	target: TargetIdentifier

	versions: {
		enkore: string
		core: string
		target: string
	}

	git: {
		commit: string
	} | null

	environment: {
		platform: string
		npmVersion: string
		nodeVersion: string
	}
}
