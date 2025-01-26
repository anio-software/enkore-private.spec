export type Definition = {
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
