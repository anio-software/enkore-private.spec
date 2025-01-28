import type {
	FourtuneRealmJSConfig,
	FourtuneRealmCConfig,
	FourtuneRealmWebConfig,
	FourtuneSession
} from "#~src/export/__star_export.mts"

export type Definition = {
	realm: {
		name: "js"
		config: FourtuneRealmJSConfig
	} | {
		name: "c"
		config: FourtuneRealmCConfig
	} | {
		name: "web"
		config: FourtuneRealmWebConfig
	}

	autogenerate?: Record<string, (
		session: FourtuneSession,
		filePath: string
	) => Promise<string> | string>
}
