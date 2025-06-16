import type {ToolchainIDs} from "@anio-software/enkore-private.toolchain-types"

type CurrentToolchain = {
	installedOnPlatform: string
	installedID: ToolchainIDs
	installedRev: number
}

export type Definition = {
	currentToolchain: CurrentToolchain|false
}
