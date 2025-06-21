import type {TargetIdentifier} from "@anio-software/enkore-private.primitives"

export type TargetIdentifierToEntityName<
	T extends TargetIdentifier
> =
    T extends "c"          ? "EnkoreTargetCOptions"         :

    T extends "js-none"    ? "EnkoreTargetJSNoneOptions"    :
    T extends "js-web"     ? "EnkoreTargetJSWebOptions"     :
    T extends "js-node"    ? "EnkoreTargetJSNodeOptions"    :
    T extends "js-hybrid"  ? "EnkoreTargetJSHybridOptions"  :

    T extends "jsx-none"   ? "EnkoreTargetJSXNoneOptions"   :
    T extends "jsx-web"    ? "EnkoreTargetJSXWebOptions"    :
    T extends "jsx-node"   ? "EnkoreTargetJSXNodeOptions"   :
    T extends "jsx-hybrid" ? "EnkoreTargetJSXHybridOptions" :

    never
