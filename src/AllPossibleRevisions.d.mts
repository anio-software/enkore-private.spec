import type {AllPossibleEntities} from "#~synthetic/user/AllPossibleEntities.d.mts"
import type {FourtuneVersionedEntity} from "./FourtuneVersionedEntity.d.mts";

type RevisionOf<T> = T extends FourtuneVersionedEntity ? T["_fourtuneEntityDescriptor"]["revision"] : never

export type AllPossibleRevisions = RevisionOf<AllPossibleEntities>
