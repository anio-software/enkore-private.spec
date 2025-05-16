import type {AllDefinedEntities} from "#~synthetic/user/AllDefinedEntities.d.mts"
import type {UnknownEntity} from "#~src/export/UnknownEntity.d.mts"

type MajorVersionOf<T> = T extends UnknownEntity ? T["entityMajorVersion"] : never

export type AllDefinedMajorVersions = MajorVersionOf<AllDefinedEntities>
