import type {EnkoreJSRuntimeEmbeddedFile} from "#~src/export/__star_export.mts"

export type Definition = {
	// NB: do not rename this property ("immutable"), it is hardcoded in the
	// runtime code generation
	// runtime behaviour:
	// this property will be recursively frozen with Object.freeze()
	immutable: {
		projectId: string
		embeds: Record<string, EnkoreJSRuntimeEmbeddedFile>
	}

	mutable: {
		embedResourceURLs: Record<string, string>
	}
}
