import type {
	FourtuneSession
} from "#~src/export/__star_export.mts"

type ObjectFile = {
	path: string
	contents: string
}

export type Definition = {
	preInitialize: (
		f: FourtuneSession
	) => Promise<undefined>

	initialize: (
		f: FourtuneSession
	) => Promise<undefined>

//	runHook: (
//		id: string
//	) => Promise<undefined>

	setInternalData: (key: string, data: any) => unknown
	getInternalData: (key: string) => unknown

	preprocessSourceFile?: (
		sourceFilePath: string,
		f: FourtuneSession
	) => Promise<string>

	generateObjectFile: (
		sourceFilePath: string,
		f: FourtuneSession
	) => Promise<ObjectFile | ObjectFile[]>
}
