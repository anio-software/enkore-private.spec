import type {
	EnkoreExtendedSessionAPI,
	EnkoreCoreRealmDependencyInstallSpecification
} from "#~src/export/__star_export.mts"

type ObjectFile = ({
	path: string
} | {
	name: string
}) & {
	contents: string
}

export type Definition = {
	getRealmDependenciesToInstall: () => Promise<{
		[dependencyName: string]: EnkoreCoreRealmDependencyInstallSpecification
	}>

	preInitialize: (
		f: EnkoreExtendedSessionAPI
	) => Promise<undefined>

	initialize: (
		f: EnkoreExtendedSessionAPI
	) => Promise<{
		products: {
			name: string
		}[]
	}>

	setInternalData: (key: string, data: any) => unknown
	getInternalData: (key: string) => unknown

	preprocessSourceFile?: (
		f: EnkoreExtendedSessionAPI,
		sourceFilePath: string,
		sourceCode: string
	) => Promise<string>

	generateObjectFile: (
		f: EnkoreExtendedSessionAPI,
		sourceFilePath: string,
		sourceCode: string
	) => Promise<ObjectFile | ObjectFile[] | "ignore" | "copy">

	generateProduct: (
		f: EnkoreExtendedSessionAPI,
		productName: string
	) => Promise<undefined>
}
