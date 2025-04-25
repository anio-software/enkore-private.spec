export type Definition = {
	requestedBy: "enkore" | "target"
	path: string
	content: string
	fullyManagedByEnkore?: boolean
	fileIsExecutable?: boolean
}
