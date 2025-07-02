import type {EnkoreSessionAPI} from "#~export/__aggregatedExports.ts"

export type Definition = {
	generateAfterPreprocessing?: boolean
	destinationPath: string

	generator: (
		session: EnkoreSessionAPI,
		destinationPath: string
	) => Promise<string> | string
}
