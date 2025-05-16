import type {AllDefinedAPIs} from "#~synthetic/user/AllDefinedAPIs.mts"
import type {UnknownAPI} from "#~src/export/UnknownAPI.mts"

type MajorVersionOf<T> = T extends UnknownAPI ? T["apiMajorVersion"] : never

export type AllDefinedMajorVersions = MajorVersionOf<AllDefinedAPIs>
