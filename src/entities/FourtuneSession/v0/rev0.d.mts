import type {
	FourtuneConfig,
	FourtuneRealmJSConfig,
	FourtuneRealmCConfig,
	FourtuneRealmWebConfig
} from "#~src/export/__star_export.mts"

export type Definition = {
	project: {
		root: string
		config: FourtuneConfig
	}

	emit: {
		warning: (id: string|undefined, message: string) => undefined
		error: (id: string|undefined, message: string) => undefined
	}

	realm: {
		_integration: {
			setInternalData: (data: any) => unknown
			getInternalData: () => unknown
		}

		getConfig: () => 
			FourtuneRealmJSConfig  |
			FourtuneRealmCConfig   |
			FourtuneRealmWebConfig

		getDependency: (dependencyName: string) => unknown
	}
}
