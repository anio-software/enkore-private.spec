export type CommonJSTargetOptions = {
	externalPackages?: string[]
	publishWithExactDependencyVersions?: boolean

	createTypesPackage?: {
		orgName: string
	}

	exports?: {
		[name: string]: {
			externalPackages?: string[]
			checkAgainstInterface?: [string, string]
		}
	}
}
