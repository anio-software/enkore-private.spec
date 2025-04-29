export type CommonJSTargetOptions = {
	externalPackages?: string[]
	externalTypePackages?: string[]
	preprocess?: {
		expandStarExports?: boolean
	}

	publish?: {
		withExactDependencyVersions?: boolean
		withPackageNames?: string[]
	}

	createTypesPackage?: {
		orgName: string
		// todo: add "packageName?: string"
	}

	exports?: {
		[name: string]: {
			// todo: maybe have preprocess.expandStarExports here too?

			externalPackages?: string[]
			externalTypePackages?: string[]

			checkAgainstInterface?: [string, string]
		}
	}
}
