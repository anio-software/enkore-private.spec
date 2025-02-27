import type {
	EnkoreSessionAPI,
	EnkoreCoreRealmDependencyInstallSpecification,
	EnkoreBoilerplateFile
} from "#~src/export/__star_export.mts"

import type {NodeAPIMessage} from "@enkore/primitives"

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

	getBoilerplateFiles?: (
		f: EnkoreSessionAPI
	) => Promise<EnkoreBoilerplateFile[]>

	getGitIgnoredFiles?: (
		f: EnkoreSessionAPI
	) => Promise<string[]>

	hook: {
		preInitialize?: (
			f: EnkoreSessionAPI
		) => Promise<undefined>

		preLint?: (
			f: EnkoreSessionAPI
		) => Promise<undefined>

		preCompile?: (
			f: EnkoreSessionAPI
		) => Promise<undefined>
	}

	initialize: (
		f: EnkoreSessionAPI
	) => Promise<{
		products: {
			name: string
		}[]
	}>

	preprocess?: (
		f: EnkoreSessionAPI,
		sourceFilePath: string,
		sourceCode: string
	) => Promise<string>

	lint?: (
		f: EnkoreSessionAPI,
		sourceFilePath: string,
		sourceCode: string
	) => NodeAPIMessage[]

	compile: (
		f: EnkoreSessionAPI,
		sourceFilePath: string,
		sourceCode: string
	) => Promise<ObjectFile | ObjectFile[] | "ignore" | "copy">

	generateProduct: (
		f: EnkoreSessionAPI,
		productName: string
	) => Promise<undefined>
}
