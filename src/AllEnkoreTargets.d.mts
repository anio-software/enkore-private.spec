import type {
	EnkoreTargetJSNone,
	EnkoreTargetJSNode,
	EnkoreTargetJSWeb,
	EnkoreTargetCOptions
} from "#~src/export/__star_export.mts"

export type AllEnkoreTargets = EnkoreTargetJSNone   |
                               EnkoreTargetJSNode   |
                               EnkoreTargetJSWeb    |
                               EnkoreTargetCOptions
