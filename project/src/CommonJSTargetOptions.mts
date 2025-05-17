type NonEmptyArray<T> = [T, ...T[]]

type PackageName = string | {
	name: string
	publishWithProvenance?: boolean
}

type NPMRegistry = {
	url: string
	clientPrivateKeyFilePath?: string
	clientCertificateFilePath?: string
	authTokenFilePath?: string
}

export type CommonJSTargetOptions = {
	externalPackages?: string[]
	externalTypePackages?: string[]
	preprocess?: {
		expandStarExports?: boolean
	}

	// if not specified, defaults to:
	// registry: {
	//     default: {url: "https://registry.npmjs.org/"}
	// }
	registry?: Record<string, NPMRegistry>

	publish?: {
		withExactDependencyVersions?: boolean
		withPackageNames?: NonEmptyArray<PackageName>

		typesPackage?: {
			withPackageNames: NonEmptyArray<PackageName>
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
