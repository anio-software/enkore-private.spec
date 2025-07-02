import type {AllDefinedEntities} from "#~src/AllDefinedEntities.ts"
import type {UnknownEntity} from "#~export/UnknownEntity.ts"

type MajorVersionOf<T> = T extends UnknownEntity ? T["entityMajorVersion"] : never

export type AllDefinedMajorVersions = MajorVersionOf<AllDefinedEntities>
