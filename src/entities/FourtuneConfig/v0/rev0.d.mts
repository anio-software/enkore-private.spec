import type {EntityOfKind} from "#~src/export/EntityOfKind.d.mts"

export type Definition = {
	realm: {
		name: "js"
		config: EntityOfKind<"FourtuneRealmJSConfig">
	} | {
		name: "c"
		config: EntityOfKind<"FourtuneRealmCConfig">
	} | {
		name: "web"
		config: EntityOfKind<"FourtuneRealmWebConfig">
	}

	autogenerate?: Record<string, (
		session: EntityOfKind<"FourtuneSession">,
		filePath: string
	) => Promise<string> | string>
}
