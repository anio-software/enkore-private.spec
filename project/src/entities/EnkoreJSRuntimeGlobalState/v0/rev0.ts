import type {EnkoreJSRuntimeEmbeddedFile} from "#~export/__aggregatedExports.ts"

export type Definition = {
	// NB: do not rename this property ("immutable"), it is hardcoded in the
	// runtime code generation
	// runtime behaviour:
	// this property will be recursively frozen with Object.freeze()
	immutable: {
		embeds: Map<string, EnkoreJSRuntimeEmbeddedFile>
	}

	mutable: {
		embedResourceURLs: Map<string, string>
	}
}
