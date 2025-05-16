import type {AllDefinedAPIs} from "#~synthetic/user/AllDefinedAPIs.mts"
import type {UnknownAPI} from "#~src/export/UnknownAPI.mts"

type RevisionOf<T> = T extends UnknownAPI ? T["apiRevision"] : never

export type AllDefinedRevisions = RevisionOf<AllDefinedAPIs>
