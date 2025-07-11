type Embed = {
	identifier: string

	// indicates whether this embedded file was requested as an URL
	createResourceAtRuntimeInit: boolean

	// sha256 hash
	integrity: string
}

export type Definition = {
	exports: Record<string, {
		embeds: Embed[]
	}>
}
