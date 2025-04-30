import type {TargetIdentifier} from "@enkore/primitives"
import type {ToolchainIDs} from "@enkore-types/toolchains"

export type Definition = {
	targetIdentifier: TargetIdentifier
	platform: string

	toolchainID: ToolchainIDs
	toolchainRev: number
}
