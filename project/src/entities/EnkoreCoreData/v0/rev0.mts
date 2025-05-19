import type {ToolchainIDs} from "@anio-software/enkore.toolchain-types"

type CurrentToolchain = {
	installedOnPlatform: string
	installedID: ToolchainIDs
	installedRev: number
}

export type Definition = {
	currentToolchain: CurrentToolchain|false
}
