import type {
	EnkoreSessionAPI,
	EnkoreBoilerplateFile,
	EnkoreProjectFile,
	EnkoreConfig
} from "#~export/__aggregatedExports.mts"

import type {NodeAPIMessage} from "@anio-software/enkore-private.primitives"
import type {ToolchainSpecifiers} from "@anio-software/enkore-private.toolchain-types"

type File = ({
	path: string
} | {
	name: string
}) & {
	contents: string
}

export type Definition = {
	getToolchainToInstall: (
		projectRoot: string,
		projectConfig: EnkoreConfig
	) => Promise<ToolchainSpecifiers>

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

	projectSourceFileFilter?: (
		f: EnkoreSessionAPI,
		file: EnkoreProjectFile
	) => Promise<boolean>

	getInitialInternalData?: (
		projectRoot: string,
		projectConfig: EnkoreConfig
	) => Promise<object>

	initialize: (
		f: EnkoreSessionAPI
	) => Promise<{
		products: {
			name: string
		}[]
	}>

	preprocess?: (
		f: EnkoreSessionAPI,
		file: EnkoreProjectFile,
		sourceCode: string
	) => Promise<string>

	lint?: (
		f: EnkoreSessionAPI,
		file: EnkoreProjectFile,
		sourceCode: string
	) => Promise<NodeAPIMessage[]>

	compile: (
		f: EnkoreSessionAPI,
		file: EnkoreProjectFile,
		sourceCode: string
	) => Promise<File | File[] | "unsupported" | "skip" | "copy">

	generateProduct: (
		f: EnkoreSessionAPI,
		productName: string
	) => Promise<undefined>

	testProduct: (
		f: EnkoreSessionAPI,
		productName: string
	) => Promise<undefined>

	publishProduct: (
		f: EnkoreSessionAPI,
		productName: string
	) => Promise<undefined>
}
