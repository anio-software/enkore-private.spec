import type {AllDefinedEntities} from "#~synthetic/user/AllDefinedEntities.mts"
import type {UnknownEntity} from "#~src/export/UnknownEntity.mts"

type RevisionOf<T> = T extends UnknownEntity ? T["entityRevision"] : never

export type AllDefinedRevisions = RevisionOf<AllDefinedEntities>
