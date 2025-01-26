import type {AllDefinedEntities} from "#~synthetic/user/AllDefinedEntities.d.mts"
import type {GenericEntity} from "#~src/export/GenericEntity.d.mts"

type MajorVersionOf<T> = T extends GenericEntity ? T["entityMajorVersion"] : never

export type AllDefinedMajorVersions = MajorVersionOf<AllDefinedEntities>
