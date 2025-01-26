import type {AllDefinedEntities} from "#~synthetic/user/AllDefinedEntities.d.mts"
import type {UnknownEntity} from "#~src/export/UnknownEntity.d.mts"

type RevisionOf<T> = T extends UnknownEntity ? T["entityRevision"] : never

export type AllDefinedRevisions = RevisionOf<AllDefinedEntities>
