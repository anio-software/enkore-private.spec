import type {EnkoreJSRuntimeEmbeddedFile} from "#~src/export/__star_export.mts"

export type Definition = {
	// do not rename this property ("immutable"), it is hardcoded in the
	// runtime code generation
	immutable: {
		embeds: Record<string, EnkoreJSRuntimeEmbeddedFile>
	}

	// do not rename this property ("mutable"), it is hardcoded in the
	// runtime code generation
	mutable: {
		embedResourceURLs: Record<string, string>
	}
}
