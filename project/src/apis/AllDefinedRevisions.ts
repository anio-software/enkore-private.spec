import type {AllDefinedAPIs} from "#~src/AllDefinedAPIs.mts"
import type {UnknownAPI} from "#~export/UnknownAPI.mts"

type RevisionOf<T> = T extends UnknownAPI ? T["apiRevision"] : never

export type AllDefinedRevisions = RevisionOf<AllDefinedAPIs>
