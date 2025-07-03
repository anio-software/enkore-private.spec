import type {
	EnkoreSessionExtendedAPI,
	EnkoreBoilerplateFile,
	EnkoreProjectFile,
	EnkoreBuildFile,
	EnkoreConfig
} from "#~export/__aggregatedExports.ts"

import type {
	NodeAPIMessage,
	NodePackageJSON
} from "@anio-software/enkore-private.primitives"
import type {ToolchainSpecifiers} from "@anio-software/enkore-private.toolchain-types"

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
	) => Promise<ToolchainSpecifiers>

	getInitialInternalData?: (
		earlySession: EarlySession
	) => Promise<object>

	getBoilerplateFiles?: (
		f: EnkoreSessionExtendedAPI
	) => Promise<EnkoreBoilerplateFile[]>

	getGitIgnoredFiles?: (
		f: EnkoreSessionExtendedAPI
	) => Promise<string[]>

	hook: {
		preInitialize?: (
			f: EnkoreSessionExtendedAPI
		) => Promise<undefined>

		preLint?: (
			f: EnkoreSessionExtendedAPI
		) => Promise<undefined>

		preCompile?: (
			f: EnkoreSessionExtendedAPI
		) => Promise<undefined>
	}

	projectSourceFileFilter?: (
		f: EnkoreSessionExtendedAPI,
		file: EnkoreProjectFile
	) => Promise<boolean>

	initialize: (
		f: EnkoreSessionExtendedAPI
	) => Promise<{
		products: {
			name: string
		}[]
	}>

	preprocess?: (
		f: EnkoreSessionExtendedAPI,
		file: EnkoreProjectFile,
		sourceCode: string,
		emitFileMessage: EmitFileMessage
	) => Promise<File | File[] | string>

	lint?: (
		f: EnkoreSessionExtendedAPI,
		file: EnkoreProjectFile|EnkoreBuildFile,
		sourceCode: string,
		emitFileMessage: EmitFileMessage
	) => Promise<NodeAPIMessage[]>

	compile: (
		f: EnkoreSessionExtendedAPI,
		file: EnkoreProjectFile|EnkoreBuildFile,
		sourceCode: string,
		emitFileMessage: EmitFileMessage
	) => Promise<File | File[] | "unsupported" | "skip" | "copy">

	generateProduct: (
		f: EnkoreSessionExtendedAPI,
		productName: string
	) => Promise<undefined>

	testProduct: (
		f: EnkoreSessionExtendedAPI,
		productName: string
	) => Promise<undefined>

	publishProduct: (
		f: EnkoreSessionExtendedAPI,
		productName: string
	) => Promise<undefined>
}
