import type {DefinedEntities} from "./getDefinedEntities.mts"

export type NewestEntityVersions = Map<string, {
	majorVersion: number
	revision: {
		importPath: string
		importAliasName: string
		revision: number
		entityType: (definitionType: string) => string
	}
}>

export function getNewestEntityVersions(allEntities: DefinedEntities): NewestEntityVersions {
	let ret: NewestEntityVersions = new Map()

	for (const [entityName, versionMap] of allEntities.entries()) {
		let definedMajorVersions = []

		for (const [majorVersion] of versionMap.entries()) {
			definedMajorVersions.push(majorVersion)
		}

		const highestMajorVersion = Math.max.apply(undefined, definedMajorVersions)

		let definedRevisions = []

		for (const revision of versionMap.get(highestMajorVersion)!) {
			definedRevisions.push(revision.revision)
		}

		const highestRevision = Math.max.apply(undefined, definedRevisions)

		ret.set(entityName, {
			majorVersion: highestMajorVersion,
			revision: versionMap.get(highestMajorVersion)!.filter(x => {
				return x.revision === highestRevision
			})[0]
		})
	}

	return ret
}
