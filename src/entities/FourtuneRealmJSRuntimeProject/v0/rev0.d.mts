import type {EntityOfKind} from "#~src/export/EntityOfKind.d.mts"

export type Definition = {
	packageJSON: {}
	fourtuneConfiguration: EntityOfKind<"FourtuneConfig">
}
