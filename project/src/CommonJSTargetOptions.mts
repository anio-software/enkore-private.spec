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

type PublishConfig = {
	packageName: string
	registry?: string // defaults to "default"
	publishWithProvenance?: boolean // defaults to false
	tag?: string // defaults to "latest"
	packageContents?: "project" | "projectTypes" // defaults to "project"
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

	publishWithExactDependencyVersions?: boolean

	publish?: PublishConfig[]

	exports?: {
		[name: string]: {
			// todo: maybe have preprocess.expandStarExports here too?

			externalPackages?: string[]
			externalTypePackages?: string[]

			checkAgainstInterface?: [string, string]
		}
	}
}
