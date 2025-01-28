import type {
	FourtuneCoreLoadedDependency,
	FourtuneCoreDependency
} from "#~src/export/__star_export.mts"

import type {RealmName} from "@fourtune/primitives"

export type Definition = {
	loadRealmDependency: (
		projectRoot: string | 1337,
		realm: RealmName,
		dependencyName: string
	) => Promise<FourtuneCoreLoadedDependency>

	installRealmDependencies: (
		projectRoot: string | 1337,
		realm: RealmName,
		dependencies: {
			[dependencyName: string]: FourtuneCoreDependency
		},
		options?: {
			npmBinaryPath?: string,
			force?: boolean
		}
	) => {}

	findProjectRootFromDirectory: (
		startDirectory: string
	) => Promise<string|false>
}
