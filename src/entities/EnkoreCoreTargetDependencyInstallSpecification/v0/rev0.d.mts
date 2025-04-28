export type Definition = {
	version: string

	entryPoints: Record<string, {
		importKind: "default" | "star"
	}>

	isolated?: boolean
}
