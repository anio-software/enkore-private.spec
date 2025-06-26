import type {NodePackageJSON} from "@anio-software/enkore-private.primitives"
import type {EnkoreConfig} from "#~export/__aggregatedExports.ts"
import type {JSONCompatibleType} from "#~export/JSONCompatibleType.ts"
import type {DistributiveOmit} from "#~src/DistributiveOmit.ts"

//
// I don't want the target._toolchain to create type errors in the runtime API
// (the property _toolchain uses a non-public type)
//
type ConfigWithoutTargetProperty = DistributiveOmit<
	EnkoreConfig, "target"
>

type ConfigTargetWithoutToolchainProperty = DistributiveOmit<
	EnkoreConfig["target"], "_toolchain"
>

type Config = ConfigWithoutTargetProperty & {
	target: ConfigTargetWithoutToolchainProperty & {
		_toolchain: [string, number]
	}
}

export type Definition = {
	projectId: string
	packageJSON: NodePackageJSON
	enkoreConfiguration: JSONCompatibleType<Config>
}
