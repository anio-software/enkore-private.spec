import type {TargetIdentifier} from "@enkore/primitives"

export type TargetIdentifierToEntityName<
	T extends TargetIdentifier
> =
    T extends "c"       ? "EnkoreTargetCOptions"      :
    T extends "js-none" ? "EnkoreTargetJSNoneOptions" :
    T extends "js-node" ? "EnkoreTargetJSNodeOptions" :
    T extends "js-web"  ? "EnkoreTargetJSWebOptions"  :
    never
