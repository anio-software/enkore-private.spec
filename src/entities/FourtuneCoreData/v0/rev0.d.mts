import type {RealmName} from "@fourtune/primitives"

export type Definition = {
	realm: RealmName
	platform: string

	realmDependencies: {
		name: string
		module: unknown
		version: string
		isolated: boolean
	}[]
}
