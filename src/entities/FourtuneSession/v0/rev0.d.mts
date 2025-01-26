import type {EntityOfKind} from "#~src/export/EntityOfKind.d.mts"

export type Definition = {
	project: {
		root: string
		config: EntityOfKind<"FourtuneConfig">
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

		getConfig: () => unknown
		getDependency: (dependencyName: string) => unknown
	}
}
