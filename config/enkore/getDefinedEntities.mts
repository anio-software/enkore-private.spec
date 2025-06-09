import {scandir} from "@aniojs/node-fs"
import {fileURLToPath} from "node:url"
import path from "node:path"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

type DefinedEntity = Map<number, {
	importPath: string
	importAliasName: string
	revision: number
	entityType: (definitionType: string) => string
}[]>

export type DefinedEntities = Map<string, DefinedEntity>

export async function getDefinedEntities(): Promise<DefinedEntities> {
	const map: DefinedEntities = new Map()
	const entries = await scandir(
		path.join(__dirname, "..", "..", "project", "src", "entities"), {
			sorted: true
		}
	)

	for (const entry of entries) {
		if (entry.type !== "regularFile") continue
		if (entry.parents.length !== 2) continue
		if (!entry.name.startsWith("rev")) continue

		const entityName = entry.parents[0]
		const entityMajorVersion = parseInt(entry.parents[1].slice(1), 10)
		const entityRevision = parseInt(entry.name.slice(3), 10)

		if (!map.has(entityName)) {
			map.set(entityName, new Map())
		}

		const entityMap = map.get(entityName)!

		if (!entityMap.has(entityMajorVersion)) {
			entityMap.set(entityMajorVersion, [])
		}

		entityMap.get(entityMajorVersion)!.push({
			importPath: `#~src/entities/${entry.relative_path}`,
			importAliasName: `${entityName}_V${entityMajorVersion}_Rev${entityRevision}`,
			revision: entityRevision,
			entityType(definitionType: string) {
				let code = ``

				code += `DefineEntity<`
				code += `"${entityName}", `
				code += `${entityMajorVersion}, `
				code += `${entityRevision}, `
				code += `${definitionType}`
				code += `>`

				return code
			}
		})
	}

	return map
}
