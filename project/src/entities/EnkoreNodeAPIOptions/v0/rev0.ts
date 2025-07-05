import type {ToolchainSpecifier} from "@anio-software/enkore-private.primitives"

export type Definition = {
	stdIOLogs?: boolean
	isCIEnvironment?: boolean
	npmBinaryPath?: string
	force?: boolean
	onlyInitializeProject?: boolean
	allowTypeErrorsInEnkoreConfigFile?: boolean
	_partialBuild?: boolean
	_forceBuild?: boolean
	_forceToolchain?: ToolchainSpecifier|false
}
