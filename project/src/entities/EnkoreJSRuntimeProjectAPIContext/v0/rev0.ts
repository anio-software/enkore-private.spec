import type {
	EnkoreJSRuntimeProject,
	EnkoreJSRuntimeEmbeddedFile
} from "#~src/AllDefinedEntities.ts"

export type Definition = {
	project: EnkoreJSRuntimeProject

	_projectEmbedFileMapRemoveMeInBundle?: Map<string, EnkoreJSRuntimeEmbeddedFile>
}
