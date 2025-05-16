import type {AllDefinedEntities} from "#~synthetic/user/AllDefinedEntities.mts"
import type {UnknownEntity} from "#~src/export/UnknownEntity.mts"

type MajorVersionOf<T> = T extends UnknownEntity ? T["entityMajorVersion"] : never

export type AllDefinedMajorVersions = MajorVersionOf<AllDefinedEntities>
