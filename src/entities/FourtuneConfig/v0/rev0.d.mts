import type {EntityOfKind} from "#~src/EntityOfKind.d.mts"
import type {RealmName} from "@fourtune/primitives"

export type Definition = {
	// isConcrete=false because we don't know what version the
	// user is using
	realm: {
		name: RealmName
	} & EntityOfKind<
		false,
		"FourtuneRealmJSConfig"  |
		"FourtuneRealmWebConfig" |
		"FourtuneRealmCConfig"
	>

	autogenerate: Record<string, (
		// isConcrete=false because we don't know what version the
		// user is using
		session: EntityOfKind<false, "FourtuneSession">,
		filePath: string
	) => Promise<string> | string>
}
