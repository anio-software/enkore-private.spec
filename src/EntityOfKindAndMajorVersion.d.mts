import type {Kinds} from "./Kinds.d.mts"
import type {AllPossibleMajorVersions} from "./AllPossibleMajorVersions.d.mts"
import type {EntityType} from "./EntityType.d.mts"
import type {EntitiesByKindAndMajorVersion} from "#~src/maps/EntitiesByKindAndMajorVersion.d.mts"

export type EntityOfKindAndMajorVersion<
	IsConcrete extends boolean,
	Kind extends Kinds,
	MajorVersion extends AllPossibleMajorVersions
> = IsConcrete extends true ? EntitiesByKindAndMajorVersion[Kind][MajorVersion] : EntityType<
	Kind,
	MajorVersion,
	number,
	unknown
>
