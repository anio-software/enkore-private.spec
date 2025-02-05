import type {
	EnkoreSessionAPI
} from "#~src/export/__star_export.mts"

type ObjectFile = {
	path: string
	contents: string
}

export type Definition = {
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
