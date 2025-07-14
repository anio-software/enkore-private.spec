import type {EnkoreJSRuntimeProject} from "#~src/AllDefinedEntities.ts"
import type {DistributiveOmit} from "#~src/DistributiveOmit.ts"
import type {Definition as EmbeddedFile} from "#~src/entities/EnkoreJSRuntimeEmbeddedFile/v0/rev0.ts"

type Embed = DistributiveOmit<EmbeddedFile, "createResourceAtRuntimeInit"> & {
	_resourceURL: string
}

export type Definition = {
	project: EnkoreJSRuntimeProject

	_projectEmbedFileMapRemoveMeInBundle?: Map<string, Embed>
}
