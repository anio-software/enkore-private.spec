type NPMRegistry = {
	url: string
	clientPrivateKeyFilePath?: string
	clientCertificateFilePath?: string
	authTokenFilePath?: string
}

type PublishConfig = {
	packageName?: string
	registry?: string // defaults to "default"
	publishWithProvenance?: boolean // defaults to false
	tag?: string // defaults to "latest"
	packageContents?: "project" | "projectTypes" // defaults to "project"
	skip?: boolean
	verbatimVersion?: boolean // don't append tag to version number
}

type Environment = "web" | "node"

export type Definition = {
	environment: Environment | Environment[],

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

	packageSourceRegistryByScope?: Record<string, {
		registry: string
	}>

	publishWithExactDependencyVersions?: boolean

	publish?: PublishConfig | PublishConfig[]

	exports?: {
		[name: string]: {
			// todo: maybe have preprocess.expandStarExports here too?

			externalPackages?: string[]
			externalTypePackages?: string[]

			checkAgainstInterface?: [string, string]
		}
	}
}
