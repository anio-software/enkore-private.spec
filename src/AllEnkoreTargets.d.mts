import type {
	EnkoreTargetJSNone,
	EnkoreTargetJSNode,
	EnkoreTargetJSWeb,
	EnkoreTargetC
} from "#~src/export/__star_export.mts"

export type AllEnkoreTargets = EnkoreTargetJSNone |
                               EnkoreTargetJSNode |
                               EnkoreTargetJSWeb  |
                               EnkoreTargetC
