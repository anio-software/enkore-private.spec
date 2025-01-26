import type {Kinds} from "#~src/Kinds.d.mts"
import type {EntitiesByKindAndMajorVersion} from "#~src/maps/EntitiesByKindAndMajorVersion.d.mts"
import type {AllDefinedMajorVersions} from "#~src/AllDefinedMajorVersions.d.mts"

export type EntityOfKindAndMajorVersion<
	Kind extends Kinds,
	MajorVersion extends AllDefinedMajorVersions
> = EntitiesByKindAndMajorVersion[Kind][MajorVersion]
