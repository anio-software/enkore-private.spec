import type {
	EnkoreTargetJSNoneOptions,
	EnkoreTargetJSNodeOptions,
	EnkoreTargetJSWebOptions,
	EnkoreTargetCOptions
} from "#~src/export/__star_export.mts"

export type AllEnkoreTargets = EnkoreTargetJSNoneOptions |
                               EnkoreTargetJSNodeOptions |
                               EnkoreTargetJSWebOptions  |
                               EnkoreTargetCOptions
