import type {EnkoreSessionAPI} from "#~export/__aggregatedExports.ts"
import type {
	ToolchainIDs,
	Toolchains,
	ToolchainByID
} from "@anio-software/enkore-private.toolchain-types"

export type Definition = EnkoreSessionAPI & {
	target: {
		_getToolchain: <ID extends ToolchainIDs>(
			expectedToolchainID: ID
		) => ToolchainByID<ID>

		__getInstalledToolchain: () => Toolchains
	}
}
