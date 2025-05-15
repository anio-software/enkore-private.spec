type NonEmptyArray<T> = [T, ...T[]]

export type CommonJSTargetOptions = {
	externalPackages?: string[]
	externalTypePackages?: string[]
	preprocess?: {
		expandStarExports?: boolean
	}

	publish?: {
		withExactDependencyVersions?: boolean
		withPackageNames?: NonEmptyArray<string>

		typesPackage?: {
			withPackageNames: NonEmptyArray<string>
		}
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
