type Embed = {
	identifier: string

	// indicates whether this embedded file was requested as an URL
	createResourceAtRuntimeInit: boolean
}

export type Definition = {
	exports: Record<string, {
		embeds: Embed[]
	}>
}
