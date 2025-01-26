import type {Kinds} from "#~src/Kinds.d.mts"
import type {AllDefinedEntities} from "#~synthetic/user/AllDefinedEntities.d.mts"
import type {AllDefinedMajorVersions} from "#~src/AllDefinedMajorVersions.d.mts"

export type EntitiesByKindAndMajorVersion = {
	[Kind in Kinds]: {
		[MajorVersion in AllDefinedMajorVersions]: Extract<AllDefinedEntities, {
			entityKind: Kind
			entityMajorVersion: MajorVersion
		}>
	}
}
