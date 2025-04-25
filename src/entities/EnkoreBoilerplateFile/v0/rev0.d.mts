export type Definition = {
	scope: "enkore" | "target"
	path: string
	content: string
	fullyManagedByEnkore?: boolean
	fileIsExecutable?: boolean
}
