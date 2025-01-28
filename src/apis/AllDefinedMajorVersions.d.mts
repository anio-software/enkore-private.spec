import type {AllDefinedAPIs} from "#~synthetic/user/AllDefinedAPIs.d.mts"
import type {UnknownAPI} from "#~src/export/UnknownAPI.d.mts"

type MajorVersionOf<T> = T extends UnknownAPI ? T["apiMajorVersion"] : never

export type AllDefinedMajorVersions = MajorVersionOf<AllDefinedAPIs>
