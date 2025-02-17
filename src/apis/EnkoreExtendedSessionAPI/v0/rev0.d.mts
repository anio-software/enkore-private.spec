import type {
	EnkoreSessionAPI,
	EnkoreNodeAPIMessage
} from "#~src/export/__star_export.mts"

import type {RawType} from "#~src/export/RawType.d.mts"

export type Definition = RawType<EnkoreSessionAPI> & {
	emitMessage: (
		severity: EnkoreNodeAPIMessage["severity"],
		id: EnkoreNodeAPIMessage["id"],
		message: EnkoreNodeAPIMessage["message"]
	) => undefined
}
