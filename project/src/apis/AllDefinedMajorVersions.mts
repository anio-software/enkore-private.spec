import type {AllDefinedAPIs} from "#~src/AllDefinedAPIs.mts"
import type {UnknownAPI} from "#~export/UnknownAPI.mts"

type MajorVersionOf<T> = T extends UnknownAPI ? T["apiMajorVersion"] : never

export type AllDefinedMajorVersions = MajorVersionOf<AllDefinedAPIs>
