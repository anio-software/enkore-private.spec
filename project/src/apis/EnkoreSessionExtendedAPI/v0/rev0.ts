import type {EnkoreSessionAPI} from "#~export/__aggregatedExports.ts"
import type {
	ToolchainIDs,
	Toolchains,
	ToolchainByID
} from "@anio-software/enkore-private.toolchain-types"

type ExtendedAPI = {
	target: {
		getToolchain: <ID extends ToolchainIDs>(
			expectedToolchainID: ID
		) => ToolchainByID<ID>

		getCurrentlyInstalledToolchain: () => Toolchains
	}
}

export type Definition = EnkoreSessionAPI & {
	_internal: ExtendedAPI
}
