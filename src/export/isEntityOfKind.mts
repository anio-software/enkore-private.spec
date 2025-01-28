import type {Kinds} from "#~src/entities/Kinds.d.mts"
import type {EntitiesByKind} from "#~src/maps/EntitiesByKind.d.mts"
import type {UnknownEntity} from "./UnknownEntity.d.mts"

export function isEntityOfKind<
	Kind extends Kinds
>(
	objToTest: unknown,
	kind: Kind
) : objToTest is EntitiesByKind[Kind] {
	const entity = objToTest as UnknownEntity

	return entity.entityKind === kind
}
