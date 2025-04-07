import type {
	EnkoreTargetJSNoneOptions,
	EnkoreTargetJSNodeOptions,
	EnkoreTargetJSWeb,
	EnkoreTargetCOptions
} from "#~src/export/__star_export.mts"

export type AllEnkoreTargets = EnkoreTargetJSNoneOptions |
                               EnkoreTargetJSNodeOptions |
                               EnkoreTargetJSWeb         |
                               EnkoreTargetCOptions
