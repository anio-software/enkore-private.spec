import type {Kinds} from "#~src/Kinds.d.mts"
import type {EntitiesByKind} from "#~src/maps/EntitiesByKind.d.mts"
import type {GenericEntity} from "./GenericEntity.d.mts"

export function isEntityOfKind<
	Kind extends Kinds
>(
	objToTest: unknown,
	kind: Kind
) : objToTest is EntitiesByKind[Kind] {
	const entity = objToTest as GenericEntity

	return entity.entityKind === kind
}
