type Embed = {
	// indicates whether this embedded file was requested as an URL
	createResourceAtRuntimeInit: boolean

	// sha256 hash
	integrity: string

	url: string
	sourceFilePath: string

	size: number
}

export type Definition = {
	exports: Record<string, {
		embeds: Record<string, Embed>
	}>
}
