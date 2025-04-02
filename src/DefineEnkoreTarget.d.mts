import type {TargetIdentifier} from "@enkore/primitives"

//
// it would be tempting to add the realm/target integration api
// object here but this won't work with enkore's architecture:
// the target integration relies on @enkore/core to setup the target
// dependencies (such as rollup, typescript etc.) so this cannot be
// added here
//
export type DefineEnkoreTarget<
	Identifier extends TargetIdentifier,
	Config extends object = {}
> = {
	readonly _targetIdentifier: Identifier
} & Config
