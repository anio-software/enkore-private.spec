import type {EnkoreJSRuntimeContextOptions} from "#~src/AllDefinedEntities.ts"
import type {EntitiesByKind} from "#~src/maps/EntitiesByKind.ts"
import type {EntitiesByKindAndMajorVersion} from "#~src/maps/EntitiesByKindAndMajorVersion.ts"

type AllContexts = EntitiesByKind["EnkoreJSRuntimeContext"]
type AllContextMajorVersions = Extract<AllContexts, {
	entityMajorVersion: number
}>["entityMajorVersion"]

export type Definition = {
	createContext: <T extends AllContextMajorVersions>(
		options: EnkoreJSRuntimeContextOptions,
		version: T,
		functionName?: string
	) => EntitiesByKindAndMajorVersion["EnkoreJSRuntimeContext"][T]
}
