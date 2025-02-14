import type {
	EnkoreSessionAPI,
	EnkoreCoreRealmDependencyInstallSpecification,
	EnkoreNodeAPIMessage
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
		f: EnkoreSessionAPI
	) => Promise<undefined>

	initialize: (
		f: EnkoreSessionAPI
	) => Promise<{
		products: {
			name: string
		}[]
	}>

	setInternalData: (key: string, data: any) => unknown
	getInternalData: (key: string) => unknown

	preprocessSourceFile?: (
		f: EnkoreSessionAPI,
		sourceFilePath: string,
		sourceCode: string
	) => Promise<{
		source: string
		messages: EnkoreNodeAPIMessage[]
	}>

	generateObjectFile: (
		f: EnkoreSessionAPI,
		sourceFilePath: string,
		sourceCode: string
	) => Promise<{
		object: ObjectFile | ObjectFile[] | "ignore" | "copy"
		messages: EnkoreNodeAPIMessage[]
	}>

	generateProduct: (
		f: EnkoreSessionAPI,
		productName: string
	) => Promise<{
		messages: EnkoreNodeAPIMessage[]
	}>
}
