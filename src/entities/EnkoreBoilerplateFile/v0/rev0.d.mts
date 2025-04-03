export type Definition = {
	scope: "enkore" | "target"
	path: string
	content: string
	overwrite?: boolean
	fileIsExecutable?: boolean
}
