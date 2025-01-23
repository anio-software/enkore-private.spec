import type {AllPossibleEntities} from "#~synthetic/user/AllPossibleEntities.d.mts"
import type {FourtuneVersionedEntity} from "./FourtuneVersionedEntity.d.mts";

type MajorVersionOf<T> = T extends FourtuneVersionedEntity ? T["_fourtuneEntityDescriptor"]["majorVersion"] : never

export type AllPossibleMajorVersions = MajorVersionOf<AllPossibleEntities>
