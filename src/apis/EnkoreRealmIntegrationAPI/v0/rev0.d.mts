import type {
	EnkoreSessionAPI
} from "#~src/export/__star_export.mts"

type ObjectFile = {
	path: string
	contents: string
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
	getRealmDependenciesToInstall: () => Promise<{
		[dependencyName: string]: Dependency
	}>

	preInitialize: (
		f: EnkoreSessionAPI
	) => Promise<undefined>

	initialize: (
		f: EnkoreSessionAPI
	) => Promise<undefined>

//	runHook: (
//		id: string
//	) => Promise<undefined>

	setInternalData: (key: string, data: any) => unknown
	getInternalData: (key: string) => unknown

	preprocessSourceFile?: (
		sourceFilePath: string,
		f: EnkoreSessionAPI
	) => Promise<string>

	generateObjectFile: (
		sourceFilePath: string,
		f: EnkoreSessionAPI
	) => Promise<ObjectFile | ObjectFile[]>
}
