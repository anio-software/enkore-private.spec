import type {
	ToolchainSpecifier,
	BuildMode
} from "@anio-software/enkore-private.primitives"

export type Definition = {
	stdIOLogs?: boolean
	isCIEnvironment?: boolean
	npmBinaryPath?: string
	force?: boolean
	onlyInitializeProject?: boolean
	allowTypeErrorsInEnkoreConfigFile?: boolean
	buildMode?: BuildMode
	_partialBuild?: boolean
	_forceBuild?: boolean
	_forceToolchain?: ToolchainSpecifier|false
}
