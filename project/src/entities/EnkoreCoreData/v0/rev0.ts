type CurrentToolchain = {
	installedOnPlatform: string
	installedID: string
	installedRev: number
}

export type Definition = {
	currentToolchain: CurrentToolchain|false
}
