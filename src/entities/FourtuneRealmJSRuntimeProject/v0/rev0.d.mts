import type {EntityOfKind} from "#~src/EntityOfKind.d.mts"

export type Definition = {
	packageJSON: {}
	fourtuneConfiguration: EntityOfKind<false, "FourtuneConfig">
}
