import type {Definition as EnkoreSessionAPI} from "#~src/apis/EnkoreSessionAPI/v0/rev0.ts"
import type {
	ToolchainIDs,
	Toolchains,
	ToolchainByID
} from "@anio-software/enkore-private.toolchain-types"

type InternalAPI = {
	target: {
		getToolchain: <ID extends ToolchainIDs>(
			expectedToolchainID: ID
		) => ToolchainByID<ID>

		getCurrentlyInstalledToolchain: () => Toolchains
	}
}

export type Definition = EnkoreSessionAPI & {
	_internal: InternalAPI
}
