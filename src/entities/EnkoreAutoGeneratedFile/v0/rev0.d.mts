import type {EnkoreSessionAPI} from "#~src/export/__star_export.mts"

export type Definition = {
	destinationPath: string

	generator: (
		session: EnkoreSessionAPI,
		destinationPath: string
	) => Promise<string> | string
}
