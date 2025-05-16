import type {AllDefinedEntities} from "#~src/AllDefinedEntities.mts"
import type {UnknownEntity} from "#~export/UnknownEntity.mts"

type RevisionOf<T> = T extends UnknownEntity ? T["entityRevision"] : never

export type AllDefinedRevisions = RevisionOf<AllDefinedEntities>
