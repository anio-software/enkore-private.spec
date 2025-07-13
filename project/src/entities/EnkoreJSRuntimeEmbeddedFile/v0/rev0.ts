export type Definition = {
	// indicates whether this embedded file was requested as an URL
	createResourceAtRuntimeInit: boolean

	url: string
	sourceFilePath: string

	data: string
}
