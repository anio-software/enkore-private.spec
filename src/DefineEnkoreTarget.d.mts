import type {
	EnkoreTargetIntegrationAPI
} from "#~src/export/__star_export.mts"

export type DefineEnkoreTarget<
	Identifier extends string,
	Config extends object = {}
> = {
	readonly _targetIdentifier: Identifier
	readonly config: Config
	readonly integrationAPI: EnkoreTargetIntegrationAPI
}
