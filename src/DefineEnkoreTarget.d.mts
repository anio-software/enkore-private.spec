import type {TargetIdentifier} from "@enkore/primitives"

export type DefineEnkoreTarget<
	Identifier extends TargetIdentifier,
	Config extends object = {}
> = {
	readonly _targetIdentifier: Identifier
	readonly config: Config
}
