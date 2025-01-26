import type {AllDefinedEntities} from "#~synthetic/user/AllDefinedEntities.d.mts"
import type {GenericEntity} from "#~src/export/GenericEntity.d.mts"

type RevisionOf<T> = T extends GenericEntity ? T["entityRevision"] : never

export type AllDefinedRevisions = RevisionOf<AllDefinedEntities>
