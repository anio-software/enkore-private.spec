import type {Kinds} from "#~src/Kinds.d.mts"
import type {AllPossibleEntities} from "#~synthetic/user/AllPossibleEntities.d.mts"

export type EntitiesByKind = {
	[Kind in Kinds]: Extract<AllPossibleEntities, {
		_fourtuneEntityDescriptor: {
			kind: Kind
		}
	}>
}
