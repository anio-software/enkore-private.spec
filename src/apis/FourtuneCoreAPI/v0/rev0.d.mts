import type {RealmName} from "@fourtune/primitives"
import type {NodePackageJSON} from "@fourtune/primitives"

type LoadedDependency = {
	path: string
	version: string
	importedDependencyObject: unknown
	dependencyPackageJSON: NodePackageJSON
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
	setDebugMode: (mode: boolean) => boolean,

	loadRealmDependency: (
		projectRoot: string | ["inferFromCLIArgs"],
		realm: RealmName,
		dependencyName: string
	) => Promise<LoadedDependency>

	installRealmDependencies: (
		projectRoot: string | ["inferFromCLIArgs"],
		realm: RealmName,
		dependencies: {
			[dependencyName: string]: Dependency
		},
		options?: {
			npmBinaryPath?: string,
			force?: boolean
		}
	) => Promise<undefined>

	findProjectRootFromDirectory: (
		startDirectory: string
	) => Promise<string|false>
}
