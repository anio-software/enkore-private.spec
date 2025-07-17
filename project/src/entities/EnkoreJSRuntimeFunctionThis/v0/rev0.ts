import type {EnkoreJSRuntimeContextOptions} from "#~src/AllDefinedEntities.ts"
import type {EntitiesByKind} from "#~src/maps/EntitiesByKind.ts"
import type {EntitiesByKindAndMajorVersion} from "#~src/maps/EntitiesByKindAndMajorVersion.ts"

type AllContexts = EntitiesByKind["EnkoreJSRuntimeContext"]
type AllContextMajorVersions = Extract<AllContexts, {
	entityMajorVersion: number
}>["entityMajorVersion"]

type Concat<
	A extends string,
	B extends string,
	C extends string
> = `${A}${B}${C}`

export type Definition = {
	createContext: <T extends AllContextMajorVersions>(
		options: EnkoreJSRuntimeContextOptions,
		version: T,
		// we use Concat<> here so enkore doesn't replace __ FNAME __
		functionName?: Concat<"__", "FNAME", "__">
	) => EntitiesByKindAndMajorVersion["EnkoreJSRuntimeContext"][T]
}
