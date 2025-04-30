import type {ValidToolchainCombinations} from "@enkore-types/toolchains"

export type Definition = {
	stdIOLogs?: boolean
	isCIEnvironment?: boolean
	npmBinaryPath?: string
	force?: boolean
	onlyInitializeProject?: boolean
	allowTypeErrorsInEnkoreConfigFile?: boolean
	_partialBuild?: boolean
	_forceBuild?: boolean
	_forceToolchain?: ValidToolchainCombinations
}
