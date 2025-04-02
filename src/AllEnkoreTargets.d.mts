import type {
	EnkoreTargetJSNone,
	EnkoreTargetJSNode,
	EnkoreTargetJSWeb,
	EnkoreTargetWeb,
	EnkoreTargetC
} from "#~src/export/__star_export.mts"

export type AllEnkoreTargets = EnkoreTargetJSNone |
                               EnkoreTargetJSNode |
                               EnkoreTargetJSWeb  |
                               EnkoreTargetWeb    |
                               EnkoreTargetC
