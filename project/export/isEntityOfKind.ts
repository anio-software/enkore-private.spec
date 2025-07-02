import type {Kinds} from "#~src/entities/Kinds.ts"
import type {EntitiesByKind} from "#~src/maps/EntitiesByKind.ts"
import type {UnknownEntity} from "./UnknownEntity.ts"

export function isEntityOfKind<
	Kind extends Kinds
>(
	objToTest: unknown,
	kind: Kind
) : objToTest is EntitiesByKind[Kind] {
	const entity = objToTest as UnknownEntity

	return entity.entityKind === kind
}
