import type {Kinds} from "#~src/Kinds.d.mts"
import type {AllPossibleEntities} from "#~synthetic/user/AllPossibleEntities.d.mts"
import type {AllPossibleMajorVersions} from "#~src/AllPossibleMajorVersions.d.mts"

export type EntitiesByKindAndMajorVersion = {
	[Kind in Kinds]: {
		[MajorVersion in AllPossibleMajorVersions]: Extract<AllPossibleEntities, {
			_fourtuneEntityDescriptor: {
				kind: Kind
				majorVersion: MajorVersion
			}
		}>
	}
}
