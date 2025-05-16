import type {AllDefinedAPIs} from "#~synthetic/user/AllDefinedAPIs.d.mts"
import type {UnknownAPI} from "#~src/export/UnknownAPI.d.mts"

type RevisionOf<T> = T extends UnknownAPI ? T["apiRevision"] : never

export type AllDefinedRevisions = RevisionOf<AllDefinedAPIs>
