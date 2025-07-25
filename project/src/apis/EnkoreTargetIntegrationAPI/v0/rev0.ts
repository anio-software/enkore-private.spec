import type {
	EnkoreSessionAPI,
	EnkoreBoilerplateFile,
	EnkoreProjectFile,
	EnkoreBuildFile,
	EnkoreConfig
} from "#~export/__aggregatedExports.ts"

import type {
	NodeAPIMessage,
	NodePackageJSON,
	ToolchainSpecifier
} from "@anio-software/enkore-private.primitives"

type File = ({
	path: string
} | {
	name: string
}) & {
	contents: string
}

type EarlySession = {
	project: {
		root: string
		config: EnkoreConfig
		packageJSON: NodePackageJSON
	}
}

type EmitFileMessage = {
	(
		severity: NodeAPIMessage["severity"],
		message: NodeAPIMessage["message"]
	) : undefined

	(
		severity: NodeAPIMessage["severity"],
		id: NodeAPIMessage["id"],
		message: NodeAPIMessage["message"]
	) : undefined
}

export type Definition = {
	getToolchainToInstall: (
		earlySession: EarlySession
	) => Promise<ToolchainSpecifier>

	getInitialInternalData?: (
		earlySession: EarlySession
	) => Promise<object>

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

		postCompile?: (
			f: EnkoreSessionAPI
		) => Promise<undefined>
	}

	projectSourceFileFilter?: (
		f: EnkoreSessionAPI,
		file: EnkoreProjectFile
	) => Promise<boolean>

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
		sourceCode: string,
		emitFileMessage: EmitFileMessage
	) => Promise<File | File[] | string>

	lint?: (
		f: EnkoreSessionAPI,
		file: EnkoreProjectFile|EnkoreBuildFile,
		sourceCode: string,
		emitFileMessage: EmitFileMessage
	) => Promise<NodeAPIMessage[]>

	compile: (
		f: EnkoreSessionAPI,
		file: EnkoreProjectFile|EnkoreBuildFile,
		sourceCode: string,
		emitFileMessage: EmitFileMessage
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
