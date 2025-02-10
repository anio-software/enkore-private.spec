import type {RealmName} from "@enkore/primitives"

export type Definition = {
	realm: RealmName
	platform: string

	realmDependenciesStamp: string
	realmDependenciesIntegrityHash: string
}
