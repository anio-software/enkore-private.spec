import type {AllDefinedAPIs} from "#~src/AllDefinedAPIs.ts"
import type {UnknownAPI} from "#~export/UnknownAPI.ts"

type MajorVersionOf<T> = T extends UnknownAPI ? T["apiMajorVersion"] : never

export type AllDefinedMajorVersions = MajorVersionOf<AllDefinedAPIs>
