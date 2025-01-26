import type {EntityOfKind} from "#~src/export/EntityOfKind.d.mts"
import type {RealmName} from "@fourtune/primitives"

export type Definition = {
	realm: {
		name: RealmName
	} & EntityOfKind<
		"FourtuneRealmJSConfig"  |
		"FourtuneRealmWebConfig" |
		"FourtuneRealmCConfig"
	>

	autogenerate: Record<string, (
		session: EntityOfKind<"FourtuneSession">,
		filePath: string
	) => Promise<string> | string>
}
