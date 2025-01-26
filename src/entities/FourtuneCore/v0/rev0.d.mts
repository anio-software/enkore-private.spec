import type {EntityOfKind} from "#~src/export/EntityOfKind.d.mts"
import type {RealmName} from "@fourtune/primitives"

export type Definition = {
	loadRealmDependency: (
		projectRoot: string | 1337,
		realm: RealmName,
		dependencyName: string
	) => Promise<EntityOfKind<"FourtuneCoreLoadedDependency">>

	installRealmDependencies: (
		projectRoot: string | 1337,
		realm: RealmName,
		dependencies: {
			[dependencyName: string]: EntityOfKind<"FourtuneCoreDependency">
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
