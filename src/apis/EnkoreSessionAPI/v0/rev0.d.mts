import type {
	EnkoreConfig,
	EnkoreRealmJSConfig,
	EnkoreRealmCConfig,
	EnkoreRealmWebConfig,
	EnkoreRealmIntegrationAPI
} from "#~src/export/__star_export.mts"

import type {NodePackageJSON} from "@enkore/primitives"

export type Definition = {
	project: {
		root: string
		config: EnkoreConfig
	}

	emit: {
		warning: (id: string|undefined, message: string) => undefined
		error: (id: string|undefined, message: string) => undefined
	}

	realm: {
		_integration: EnkoreRealmIntegrationAPI

		getConfig: () => 
			EnkoreRealmJSConfig  |
			EnkoreRealmCConfig   |
			EnkoreRealmWebConfig

		getDependency: (dependencyName: string) => unknown
		getDependencyVersion: (dependencyName: string) => string
		getDependencyPackageJSON: (dependencyName: string) => NodePackageJSON
		getDependencyPath: (dependencyName: string) => string
	}
}
