export type Definition = {
	version: string
	isolated?: boolean
} & ({
	importKind?: "default"
} | {
	importKind: "star"
} | {
	importKind: "named"
	imports: {
		[name: string]: string|undefined
	}
})
