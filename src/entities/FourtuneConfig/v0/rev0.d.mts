import type {
	FourtuneRealmJSConfig,
	FourtuneRealmCConfig,
	FourtuneRealmWebConfig,
	FourtuneSessionAPI
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
		session: FourtuneSessionAPI,
		filePath: string
	) => Promise<string> | string>
}
