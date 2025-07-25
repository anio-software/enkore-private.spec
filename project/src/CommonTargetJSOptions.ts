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

export type CommonTargetJSOptions = {
	_disableRuntimeCodeInjection?: boolean

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

	// maybe rename to 'useExactDependencyVersions'
	publishWithExactDependencyVersions?: boolean

	publish?: PublishConfig | PublishConfig[]

	exports?: {
		[name: string]: {
			fileNamingPolicy?: {
				// could add "policy" property later for more options.
				// policy: "default" | ".." | "..."
				exemptions: string[]
			}

			// todo: maybe have preprocess.expandStarExports here too?

			externalPackages?: string[]
			externalTypePackages?: string[]

			checkAgainstInterface?: [string, string]
		}
	}
}
