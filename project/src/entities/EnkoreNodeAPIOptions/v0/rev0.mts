import type {ToolchainSpecifiers} from "@anio-software/enkore-private.toolchain-types"

export type Definition = {
	stdIOLogs?: boolean
	isCIEnvironment?: boolean
	npmBinaryPath?: string
	force?: boolean
	onlyInitializeProject?: boolean
	allowTypeErrorsInEnkoreConfigFile?: boolean
	_partialBuild?: boolean
	_forceBuild?: boolean
	_forceToolchain?: ToolchainSpecifiers|false
}
