import type {AllDefinedAPIs} from "#~src/AllDefinedAPIs.ts"
import type {UnknownAPI} from "#~export/UnknownAPI.ts"

type RevisionOf<T> = T extends UnknownAPI ? T["apiRevision"] : never

export type AllDefinedRevisions = RevisionOf<AllDefinedAPIs>
