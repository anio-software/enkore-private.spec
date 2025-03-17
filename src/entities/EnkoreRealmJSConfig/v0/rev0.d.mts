export type Definition = {
	_realm: "js"

	externalPackages?: string[]

	runtime?: "node" | "browser" | "agnostic"

	exports?: {
		[name: string]: {
			externalPackages?: string[]
			checkAgainstInterface?: {
				named?: [string, string]
				default?: [string, string]
			}
		}
	}
}
