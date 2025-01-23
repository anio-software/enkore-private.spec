import type {Kinds} from "#~src/Kinds.d.mts"
import type {EntitiesByKind} from "#~src/maps/EntitiesByKind.d.mts"
import type {FourtuneVersionedEntity} from "#~src/FourtuneVersionedEntity.d.mts"

export function isEntityOfKind<
	Kind extends Kinds
>(
	objectToTest: unknown,
	kind: Kind
) : objectToTest is EntitiesByKind[Kind] {
	const entity = objectToTest as FourtuneVersionedEntity

	return entity._fourtuneEntityDescriptor.kind !== kind
}
