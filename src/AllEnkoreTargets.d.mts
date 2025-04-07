import type {
	EnkoreTargetJSNone,
	EnkoreTargetJSNodeOptions,
	EnkoreTargetJSWeb,
	EnkoreTargetCOptions
} from "#~src/export/__star_export.mts"

export type AllEnkoreTargets = EnkoreTargetJSNone        |
                               EnkoreTargetJSNodeOptions |
                               EnkoreTargetJSWeb         |
                               EnkoreTargetCOptions
