import type {Kinds} from "#~src/entities/Kinds.ts"
import type {AllDefinedEntities} from "#~src/AllDefinedEntities.ts"
import type {AllDefinedMajorVersions} from "#~src/entities/AllDefinedMajorVersions.ts"

export type EntitiesByKindAndMajorVersion = {
	[Kind in Kinds]: {
		[MajorVersion in AllDefinedMajorVersions]: Extract<AllDefinedEntities, {
			entityKind: Kind
			entityMajorVersion: MajorVersion
		}>
	}
}
