import type {Kinds} from "#~src/entities/Kinds.mts"
import type {AllDefinedEntities} from "#~synthetic/user/AllDefinedEntities.mts"
import type {AllDefinedMajorVersions} from "#~src/entities/AllDefinedMajorVersions.mts"

export type EntitiesByKindAndMajorVersion = {
	[Kind in Kinds]: {
		[MajorVersion in AllDefinedMajorVersions]: Extract<AllDefinedEntities, {
			entityKind: Kind
			entityMajorVersion: MajorVersion
		}>
	}
}
