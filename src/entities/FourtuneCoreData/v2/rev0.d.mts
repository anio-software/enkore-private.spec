import type {RealmName} from "@fourtune/primitives"

export type Definition = {
	realm: RealmName
	platform: string

	realmDependencies: {
		name: string
		importPath: string
		version: string
		isolated: boolean
	}[]
}
