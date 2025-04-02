import type {DefineEnkoreTarget} from "#~src/DefineEnkoreTarget.d.mts"

export type Definition = DefineEnkoreTarget<
	"js", {
		externalPackages?: string[]
		publishWithExactDependencyVersions?: boolean

		runtime?: "node" | "browser" | "agnostic"

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
>
