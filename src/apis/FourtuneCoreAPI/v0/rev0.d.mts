import type {RealmName} from "@fourtune/primitives"

type LoadedDependency = {
	path: string
	version: string
	importedDependencyObject: unknown
	dependencyPackageJSON: Record<string, unknown>
}

type Dependency = {
	version: string
	isolated?: boolean
} & ({
	importKind?: "default"
} | {
	importKind: "star"
} | {
	importKind: "named"
	imports: {
		[name: string]: string|undefined
	}
})

export type Definition = {
	loadRealmDependency: (
		projectRoot: string | 1337,
		realm: RealmName,
		dependencyName: string
	) => Promise<LoadedDependency>

	installRealmDependencies: (
		projectRoot: string | 1337,
		realm: RealmName,
		dependencies: {
			[dependencyName: string]: Dependency
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
