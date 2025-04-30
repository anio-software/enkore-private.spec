import type {TargetIdentifier} from "@enkore/primitives"
import type {ValidToolchainCombinations} from "@enkore-types/toolchains"

export type Definition = {
	targetIdentifier: TargetIdentifier
	platform: string

	toolchain: ValidToolchainCombinations
}
