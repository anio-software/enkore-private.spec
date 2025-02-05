import type {
	EnkoreRealmJSConfig,
	EnkoreRealmCConfig,
	EnkoreRealmWebConfig,
	EnkoreSessionAPI
} from "#~src/export/__star_export.mts"

export type Definition = {
	realm: {
		name: "js"
		config: EnkoreRealmJSConfig
	} | {
		name: "c"
		config: EnkoreRealmCConfig
	} | {
		name: "web"
		config: EnkoreRealmWebConfig
	}

	autogenerate?: Record<string, (
		session: EnkoreSessionAPI,
		filePath: string
	) => Promise<string> | string>
}
