export type CommonJSTargetOptions = {
	externalPackages?: string[]
	externalTypePackages?: string[]

	publishWithExactDependencyVersions?: boolean

	createTypesPackage?: {
		orgName: string
	}

	exports?: {
		[name: string]: {
			externalPackages?: string[]
			externalTypePackages?: string[]

			checkAgainstInterface?: [string, string]
		}
	}
}
