import type {AllDefinedEntities} from "#~src/AllDefinedEntities.mts"
import type {UnknownEntity} from "#~export/UnknownEntity.mts"

type MajorVersionOf<T> = T extends UnknownEntity ? T["entityMajorVersion"] : never

export type AllDefinedMajorVersions = MajorVersionOf<AllDefinedEntities>
