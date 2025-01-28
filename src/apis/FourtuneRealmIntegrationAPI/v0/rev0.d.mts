import type {
	FourtuneSessionAPI
} from "#~src/export/__star_export.mts"

type ObjectFile = {
	path: string
	contents: string
}

export type Definition = {
	preInitialize: (
		f: FourtuneSessionAPI
	) => Promise<undefined>

	initialize: (
		f: FourtuneSessionAPI
	) => Promise<undefined>

//	runHook: (
//		id: string
//	) => Promise<undefined>

	setInternalData: (key: string, data: any) => unknown
	getInternalData: (key: string) => unknown

	preprocessSourceFile?: (
		sourceFilePath: string,
		f: FourtuneSessionAPI
	) => Promise<string>

	generateObjectFile: (
		sourceFilePath: string,
		f: FourtuneSessionAPI
	) => Promise<ObjectFile | ObjectFile[]>
}
