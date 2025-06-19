export type Definition = {
	_projectIdentifier: string

	// indicates whether this embedded file was requested as an URL
	_createResourceAtRuntimeInit: boolean

	projectId: string
	originalEmbedPath: string
	sourceFilePath: string
	data: string
}
