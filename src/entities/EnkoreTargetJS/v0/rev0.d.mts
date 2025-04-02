import type {DefineEnkoreTarget} from "#~src/DefineEnkoreTarget.d.mts"

export type Definition = DefineEnkoreTarget<
	"js", {
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
>
