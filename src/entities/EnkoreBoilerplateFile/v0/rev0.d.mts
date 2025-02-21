export type Definition = {
	scope: "enkore" | "realm"
	path: string
	content: string
	overwrite?: boolean
	fileIsExecutable?: boolean
}
