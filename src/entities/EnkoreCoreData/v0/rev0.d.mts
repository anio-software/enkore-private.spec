import type {TargetIdentifier} from "@enkore/primitives"

export type Definition = {
	targetIdentifier: TargetIdentifier
	platform: string

	realmDependenciesStamp: string
	realmDependenciesIntegrityHash: string
}
