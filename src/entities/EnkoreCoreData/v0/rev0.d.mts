import type {ToolchainIDs} from "@enkore-types/toolchains"

type CurrentToolchain = {
	installedOnPlatform: string
	installedID: ToolchainIDs
	installedRev: number
}

export type Definition = {
	currentToolchain: CurrentToolchain|false
}
