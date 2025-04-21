import type {EnkoreJSRuntimeEmbeddedFile} from "#~src/export/__star_export.mts"

export type Definition = {
	// NB: do not rename this property ("immutable"), it is hardcoded in the
	// runtime code generation
	// runtime behaviour:
	// this property will be recursively frozen with Object.freeze()
	immutable: {
		embeds: Record<string, EnkoreJSRuntimeEmbeddedFile>
	}

	// NB: do not rename this property ("mutable"), it is hardcoded in the
	// runtime code generation
	mutable: {
		embedResourceURLs: Record<string, string>
	}
}
