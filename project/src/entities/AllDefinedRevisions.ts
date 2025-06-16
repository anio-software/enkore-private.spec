import type {AllDefinedEntities} from "#~src/AllDefinedEntities.ts"
import type {UnknownEntity} from "#~export/UnknownEntity.ts"

type RevisionOf<T> = T extends UnknownEntity ? T["entityRevision"] : never

export type AllDefinedRevisions = RevisionOf<AllDefinedEntities>
