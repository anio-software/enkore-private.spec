import type {TargetIdentifier} from "@anio-software/enkore-private.primitives"

export type TargetIdentifierToEntityName<
	T extends TargetIdentifier
> =
    T extends "c"  ? "EnkoreTargetCOptions"  :
    T extends "js" ? "EnkoreTargetJSOptions" :
    never
